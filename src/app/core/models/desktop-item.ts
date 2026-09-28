export type DesktopIconKind = 'folder' | 'document' | 'app' | 'recycle';

export interface DesktopItem {
  id: string;
  label: string;
  icon: DesktopIconKind;
  appId: string;
}
