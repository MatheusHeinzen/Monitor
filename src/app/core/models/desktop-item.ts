export type DesktopIconKind =
  | 'recycle'
  | 'outlook'
  | 'notepad'
  | 'word'
  | 'lab'
  | 'image'
  | 'folder'
  | 'zip';

export interface DesktopItem {
  id: string;
  label: string;
  icon: DesktopIconKind;
  appId: string;
  windowTitle?: string;
  desktopX?: number;
  desktopY?: number;
  desktopSide?: 'left' | 'right';
  width?: number;
  height?: number;
  minWidth?: number;
  minHeight?: number;
  maxWidth?: number;
  maxHeight?: number;
}
