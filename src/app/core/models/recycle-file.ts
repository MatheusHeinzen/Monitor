export type RecycleKind = 'text' | 'document' | 'image';

export interface RecycleFile {
  id: string;
  name: string;
  originalPath: string;
  deletedAt: string;
  size: string;
  type: string;
  kind: RecycleKind;
  content?: string;
  scene?: 'beach';
}
