export type FolderEntryKind = 'text' | 'document' | 'image';

export interface FolderEntry {
  id: string;
  name: string;
  size: string;
  type: string;
  modified: string;
  kind: FolderEntryKind;
  content?: string;
  scene?: string;
}

export interface FolderDefinition {
  id: string;
  title: string;
  path: string;
  icon: 'folder' | 'zip';
  password?: string;
  entries: FolderEntry[];
}
