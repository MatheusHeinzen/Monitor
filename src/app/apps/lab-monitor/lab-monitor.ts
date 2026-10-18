import { Component, DestroyRef, ElementRef, inject, OnInit, signal, viewChildren } from '@angular/core';
import {
  LAB_ALERTS,
  LAB_SENSORS,
  LabSensor,
  SensorStatus,
  TEMP_HISTORY,
  VALVE_STATUS,
} from '../../core/data/lab-readings';
import { InvestigationService } from '../../core/services/investigation.service';

type LabTab = 'status' | 'valves' | 'tools';

@Component({
  selector: 'app-lab-monitor',
  templateUrl: './lab-monitor.html',
  styleUrl: './lab-monitor.scss',
})
export class LabMonitorApp implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  readonly investigation = inject(InvestigationService);
  readonly sensors = signal<LabSensor[]>(LAB_SENSORS.map((sensor) => ({ ...sensor })));
  readonly alerts = LAB_ALERTS;
  readonly history = TEMP_HISTORY;
  readonly valves = VALVE_STATUS;
  readonly clock = signal(formatClock(new Date()));
  readonly linkOk = signal(true);
  readonly tab = signal<LabTab>('status');
  readonly overrideInput = signal('');
  readonly overrideMsg = signal('');
  readonly confirmingPump = signal(false);
  readonly digits = signal(['', '', '', '']);
  readonly pumpCodeError = signal(false);
  private readonly pinBoxes = viewChildren<ElementRef<HTMLInputElement>>('pin');

  readonly chart = buildChart(TEMP_HISTORY);

  ngOnInit(): void {
    const timer = globalThis.setInterval(() => {
      this.clock.set(formatClock(new Date()));
      this.sensors.update((list) => list.map(jitter));
      this.linkOk.update((value) => (Math.random() > 0.04 ? true : value));
    }, 1800);

    this.destroyRef.onDestroy(() => globalThis.clearInterval(timer));
  }

  setTab(tab: LabTab): void {
    this.tab.set(tab);
    this.overrideMsg.set('');
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

  askShutdown(): void {
    this.confirmingPump.set(true);
    this.digits.set(['', '', '', '']);
    this.pumpCodeError.set(false);
  }

  cancelShutdown(): void {
    this.confirmingPump.set(false);
    this.digits.set(['', '', '', '']);
    this.pumpCodeError.set(false);
  }

  onDigit(index: number, event: Event): void {
    const raw = (event.target as HTMLInputElement).value.replace(/\D/g, '');
    const digit = raw.slice(-1);
    this.digits.update((list) => list.map((item, i) => (i === index ? digit : item)));
    this.pumpCodeError.set(false);
    if (digit && index < 3) {
      this.pinBoxes()[index + 1]?.nativeElement.focus();
    }
  }

  onDigitKey(index: number, event: KeyboardEvent): void {
    if (event.key === 'Backspace' && !this.digits()[index] && index > 0) {
      this.pinBoxes()[index - 1]?.nativeElement.focus();
    }
  }

  onPaste(event: ClipboardEvent): void {
    const text = (event.clipboardData?.getData('text') ?? '').replace(/\D/g, '').slice(0, 4);
    if (text.length < 2) {
      return;
    }
    event.preventDefault();
    const next = ['', '', '', ''];
    text.split('').forEach((char, index) => {
      next[index] = char;
    });
    this.digits.set(next);
    this.pinBoxes()[Math.min(text.length, 3)]?.nativeElement.focus();
  }

  confirmShutdown(): void {
    if (this.digits().join('') !== PUMP_CODE) {
      this.pumpCodeError.set(true);
      return;
    }
    this.pumpCodeError.set(false);
    this.investigation.tryShutdownPump();
  }

  runOverride(): void {
    if (this.overrideInput().trim() === 'override_refrigeracao_99') {
      this.overrideMsg.set(
        'Comando registrado no log. Estado das válvulas inalterado — verificar painel de status.',
      );
      return;
    }
    this.overrideMsg.set('Comando não reconhecido.');
  }
}

const PUMP_CODE = '5730';

function buildChart(points: typeof TEMP_HISTORY): {
  polyline: string;
  area: string;
  dots: { x: number; y: number; label: string; value: number }[];
  width: number;
  height: number;
} {
  const width = 420;
  const height = 160;
  const padX = 28;
  const padY = 16;
  const maxY = 1500;
  const minY = 0;
  const spanX = Math.max(1, points.length - 1);

  const coords = points.map((point, index) => {
    const x = padX + (index / spanX) * (width - padX * 2);
    const y = padY + (1 - (point.celsius - minY) / (maxY - minY)) * (height - padY * 2);
    return { x, y, label: point.label, value: point.celsius };
  });

  const polyline = coords.map((c) => `${c.x},${c.y}`).join(' ');
  const area = `${padX},${height - padY} ${polyline} ${width - padX},${height - padY}`;

  return { polyline, area, dots: coords, width, height };
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
  if (sensor.id === 'coolant') {
    status = next <= 5 ? 'alarm' : next <= 10 ? 'warn' : 'ok';
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
