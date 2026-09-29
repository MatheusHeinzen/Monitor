import { DesktopIconKind } from './desktop-item';

export interface AppWindow {
  id: string;
  instanceKey: string;
  appId: string;
  title: string;
  icon: DesktopIconKind;
  x: number;
  y: number;
  width: number;
  height: number;
  minWidth: number;
  minHeight: number;
  maxWidth: number;
  maxHeight: number;
  zIndex: number;
  minimized: boolean;
  focused: boolean;
  payload?: unknown;
}

export type ResizeEdge = 'n' | 's' | 'e' | 'w' | 'ne' | 'nw' | 'se' | 'sw';
