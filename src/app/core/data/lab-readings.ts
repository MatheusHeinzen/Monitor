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

export interface TempHistoryPoint {
  label: string;
  celsius: number;
}

export interface ValveStatus {
  id: string;
  name: string;
  detail: string;
  state: 'ok' | 'alarm' | 'info';
  stateLabel: string;
}

export const TEMP_HISTORY: TempHistoryPoint[] = [
  { label: '01/08', celsius: 198 },
  { label: '03/08', celsius: 201 },
  { label: '05/08', celsius: 199 },
  { label: '07/08', celsius: 204 },
  { label: '09/08', celsius: 208 },
  { label: '11/08', celsius: 215 },
  { label: '12/08', celsius: 240 },
  { label: '13/08', celsius: 610 },
  { label: '14/08', celsius: 1400 },
];

export const VALVE_STATUS: ValveStatus[] = [
  {
    id: 'main',
    name: 'Tubulação Principal',
    detail: 'Nível 2 — laboratórios / Setor B',
    state: 'alarm',
    stateLabel: 'DANIFICADA / ROMPIDA',
  },
  {
    id: 'silo',
    name: 'Silo de Reserva de Nitrogênio',
    detail: 'Acesso manual na sala técnica (Nível 2)',
    state: 'ok',
    stateLabel: 'CHEIO',
  },
  {
    id: 'water',
    name: 'Bombas de Água de Refrigeração',
    detail: 'Câmara B3',
    state: 'alarm',
    stateLabel: 'FALHA',
  },
];

export const LAB_SENSORS: LabSensor[] = [
  {
    id: 'lab-temp',
    label: 'Temp. Laboratório',
    unit: '°C',
    value: 41.2,
    min: 18,
    max: 60,
    status: 'warn',
  },
  {
    id: 'b3',
    label: 'Câmara B3',
    unit: '°C',
    value: 1284,
    min: 200,
    max: 1500,
    status: 'alarm',
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
    id: 'mass',
    label: 'Massa Isolamento B3',
    unit: 'kg',
    value: 380,
    min: 40,
    max: 500,
    status: 'alarm',
  },
  {
    id: 'coolant',
    label: 'Fluxo Refrigeração',
    unit: 'L/min',
    value: 2.1,
    min: 0,
    max: 25,
    status: 'alarm',
  },
  {
    id: 'seismic',
    label: 'Tremor Harmônico',
    unit: 'µm/s',
    value: 9.4,
    min: 0,
    max: 12,
    status: 'warn',
  },
];

export const LAB_ALERTS: LabAlert[] = [
  {
    time: '20:41:08',
    level: 'alarm',
    message: 'B3 acima de 1.200 °C — bombas de refrigeração em falha.',
  },
  {
    time: '20:38:22',
    level: 'alarm',
    message: 'Sensor de peso: massa 45 kg → 380 kg em 48 h.',
  },
  {
    time: '19:12:01',
    level: 'warn',
    message: 'Tubulação principal de N₂/água: ruptura detectada no Nível 2.',
  },
  {
    time: '18:55:40',
    level: 'warn',
    message: 'Selo da porta Setor B: temperatura de vedação crítica.',
  },
  {
    time: '12:08:14',
    level: 'ok',
    message: 'Silo de reserva de nitrogênio: nível CHEIO (manual).',
  },
];
