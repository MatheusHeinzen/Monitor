export type DesktopIconKind = 'recycle' | 'outlook' | 'notepad' | 'image';

export interface DesktopItem {
  id: string;
  label: string;
  icon: DesktopIconKind;
  appId: string;
  windowTitle?: string;
  width?: number;
  height?: number;
}
