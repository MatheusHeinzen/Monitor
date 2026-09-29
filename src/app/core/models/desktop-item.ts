export type DesktopIconKind = 'recycle' | 'outlook' | 'notepad' | 'word' | 'lab' | 'image';

export interface DesktopItem {
  id: string;
  label: string;
  icon: DesktopIconKind;
  appId: string;
  windowTitle?: string;
  width?: number;
  height?: number;
  minWidth?: number;
  minHeight?: number;
  maxWidth?: number;
  maxHeight?: number;
}
