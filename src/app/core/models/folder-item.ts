import { UserRole } from '../data/auth';

export type FolderEntryKind = 'text' | 'document' | 'image' | 'folder';

export interface FolderEntry {
  id: string;
  name: string;
  size: string;
  type: string;
  modified: string;
  kind: FolderEntryKind;
  content?: string;
  scene?: string;
  childFolderId?: string;
  requiredRole?: UserRole;
}

export interface FolderDefinition {
  id: string;
  title: string;
  path: string;
  icon: 'folder' | 'zip';
  password?: string;
  requiredRole?: UserRole;
  parentId?: string;
  entries: FolderEntry[];
}
