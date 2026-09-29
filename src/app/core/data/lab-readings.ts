export type SensorStatus = 'ok' | 'warn' | 'alarm';

export interface LabSensor {
  id: string;
  label: string;
  unit: string;
  value: number;
  min: number;
  max: number;
  status: SensorStatus;
}

export interface LabAlert {
  time: string;
  level: SensorStatus;
  message: string;
}

export const LAB_SENSORS: LabSensor[] = [
  {
    id: 'lab-temp',
    label: 'Temp. Laboratório',
    unit: '°C',
    value: 28.4,
    min: 18,
    max: 35,
    status: 'ok',
  },
  {
    id: 'conduit',
    label: 'Temp. Conduto',
    unit: '°C',
    value: 842,
    min: 600,
    max: 1100,
    status: 'warn',
  },
  {
    id: 'chamber',
    label: 'Câmara Magmática',
    unit: '°C',
    value: 1186,
    min: 900,
    max: 1300,
    status: 'ok',
  },
  {
    id: 'seismic',
    label: 'Tremor Harmônico',
    unit: 'µm/s',
    value: 3.7,
    min: 0,
    max: 12,
    status: 'warn',
  },
  {
    id: 'so2',
    label: 'SO₂ (sensor A3)',
    unit: 'ppm',
    value: 186,
    min: 0,
    max: 400,
    status: 'ok',
  },
  {
    id: 'co2',
    label: 'CO₂ Ambiente',
    unit: 'ppm',
    value: 920,
    min: 400,
    max: 2000,
    status: 'ok',
  },
  {
    id: 'pressure',
    label: 'Pressão Câmara',
    unit: 'MPa',
    value: 42.1,
    min: 20,
    max: 80,
    status: 'ok',
  },
  {
    id: 'coolant',
    label: 'Fluxo Refrigeração',
    unit: 'L/min',
    value: 14.2,
    min: 8,
    max: 25,
    status: 'ok',
  },
];

export const LAB_ALERTS: LabAlert[] = [
  {
    time: '09:41:12',
    level: 'warn',
    message: 'Tremor harmônico acima do limiar (estação S-04).',
  },
  {
    time: '09:18:03',
    level: 'ok',
    message: 'Ciclo de calibração do termopar T-12 concluído.',
  },
  {
    time: '08:55:47',
    level: 'warn',
    message: 'Temp. conduto +12 °C em 30 min — acompanhar.',
  },
  {
    time: '08:12:20',
    level: 'alarm',
    message: 'Pico SO₂ no duto de ventilação — ventiladores em modo 2.',
  },
  {
    time: '07:40:01',
    level: 'ok',
    message: 'Link rádio com superfície: estável (48 kbps).',
  },
];
