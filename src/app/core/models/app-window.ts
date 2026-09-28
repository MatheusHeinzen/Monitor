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
  zIndex: number;
  minimized: boolean;
  focused: boolean;
  payload?: unknown;
}
