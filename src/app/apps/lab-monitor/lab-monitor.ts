import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { LAB_ALERTS, LAB_SENSORS, LabSensor, SensorStatus } from '../../core/data/lab-readings';

@Component({
  selector: 'app-lab-monitor',
  templateUrl: './lab-monitor.html',
  styleUrl: './lab-monitor.scss',
})
export class LabMonitorApp implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  readonly sensors = signal<LabSensor[]>(LAB_SENSORS.map((sensor) => ({ ...sensor })));
  readonly alerts = LAB_ALERTS;
  readonly clock = signal(formatClock(new Date()));
  readonly linkOk = signal(true);

  ngOnInit(): void {
    const timer = globalThis.setInterval(() => {
      this.clock.set(formatClock(new Date()));
      this.sensors.update((list) => list.map(jitter));
      this.linkOk.update((value) => (Math.random() > 0.04 ? true : value));
    }, 1800);

    this.destroyRef.onDestroy(() => globalThis.clearInterval(timer));
  }

  barWidth(sensor: LabSensor): number {
    const span = sensor.max - sensor.min || 1;
    const ratio = (sensor.value - sensor.min) / span;
    return Math.min(100, Math.max(4, ratio * 100));
  }

  levelLabel(level: SensorStatus): string {
    if (level === 'alarm') {
      return 'ALARME';
    }
    return level === 'warn' ? 'AVISO' : 'OK';
  }
}

function jitter(sensor: LabSensor): LabSensor {
  const sway = (sensor.max - sensor.min) * 0.012;
  const next = clamp(sensor.value + (Math.random() - 0.5) * sway, sensor.min, sensor.max);
  const mid = sensor.min + (sensor.max - sensor.min) * 0.72;
  const high = sensor.min + (sensor.max - sensor.min) * 0.88;
  let status: SensorStatus = 'ok';
  if (next >= high) {
    status = 'alarm';
  } else if (next >= mid) {
    status = 'warn';
  }
  return {
    ...sensor,
    value: Number(next.toFixed(sensor.unit === '°C' && next > 100 ? 0 : 1)),
    status,
  };
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function formatClock(date: Date): string {
  return date.toLocaleTimeString('pt-BR', { hour12: false });
}
