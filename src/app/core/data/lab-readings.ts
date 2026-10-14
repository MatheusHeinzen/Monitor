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
  { label: '12/04', celsius: 320 },
  { label: '14/04', celsius: 890 },
  { label: '15/04', celsius: 1400 },
];

export const VALVE_STATUS: ValveStatus[] = [
  {
    id: 'mountain',
    name: 'Cano da montanha',
    detail: 'Chega na sala dos geradores e alimenta o duto central',
    state: 'ok',
    stateLabel: 'FLUXO ATIVO',
  },
  {
    id: 'escape',
    name: 'Válvulas de escape',
    detail: 'Fechadas por ordem do Senhor P. em 15/04/1988',
    state: 'alarm',
    stateLabel: 'FECHADAS',
  },
  {
    id: 'pump',
    name: 'Bomba do duto central',
    detail: 'Sala dos geradores — sucção magmática',
    state: 'alarm',
    stateLabel: 'LIGADA',
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
    value: 1400,
    min: 200,
    max: 1500,
    status: 'alarm',
  },
  {
    id: 'chamber',
    label: 'Câmara térmica N3',
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
    time: '15/04 18:12',
    level: 'alarm',
    message: 'Duto central a 1.400 °C. Válvulas de escape fechadas.',
  },
  {
    time: '15/04 17:40',
    level: 'alarm',
    message: 'Geração +400% depois do fechamento das válvulas.',
  },
  {
    time: '14/04 09:05',
    level: 'warn',
    message: 'Fluido com viscosidade alta e pulsação. Não é lava comum.',
  },
  {
    time: '12/04 08:00',
    level: 'ok',
    message: '320 °C. Fluxo estável.',
  },
];
