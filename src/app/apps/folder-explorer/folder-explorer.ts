import { Component, computed, inject, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { getDesktopItemsForRole } from '../../core/data/desktop-items';
import { getFolder } from '../../core/data/folders';
import { DesktopItem, DesktopIconKind } from '../../core/models/desktop-item';
import { FolderDefinition, FolderEntry } from '../../core/models/folder-item';
import { AuthService } from '../../core/services/auth.service';
import { WindowManagerService } from '../../core/services/window-manager.service';
import { AppGlyph } from '../../shared/app-glyph/app-glyph';

const DESKTOP_NAV = '__desktop__';

type ListRow = {
  id: string;
  name: string;
  modified: string;
  type: string;
  size: string;
  icon: DesktopIconKind;
  entry?: FolderEntry;
  desktopItem?: DesktopItem;
};

@Component({
  selector: 'app-folder-explorer',
  imports: [AppGlyph, FormsModule],
  templateUrl: './folder-explorer.html',
  styleUrl: './folder-explorer.scss',
})
export class FolderExplorer {
  private readonly wm = inject(WindowManagerService);
  private readonly auth = inject(AuthService);
  readonly payload = input<unknown>();

  readonly password = signal('');
  readonly error = signal(false);
  readonly unlocked = signal(false);
  readonly selectedId = signal<string | null>(null);
  readonly denied = signal(false);
  private readonly navId = signal<string | null>(null);

  readonly onDesktop = computed(() => this.navId() === DESKTOP_NAV);

  readonly folder = computed((): FolderDefinition | undefined => {
    if (this.onDesktop()) {
      return undefined;
    }
    const data = this.payload() as { folderId?: string } | null;
    const id = this.navId() ?? data?.folderId ?? '';
    return getFolder(id);
  });

  readonly title = computed(() =>
    this.onDesktop() ? 'Área de trabalho' : (this.folder()?.title ?? ''),
  );

  readonly path = computed(() =>
    this.onDesktop() ? 'Área de trabalho' : (this.folder()?.path ?? ''),
  );

  readonly headerIcon = computed((): DesktopIconKind =>
    this.onDesktop() ? 'folder' : (this.folder()?.icon ?? 'folder'),
  );

  readonly canGoBack = computed(() => {
    if (this.onDesktop()) {
      return true;
    }
    return !!this.folder()?.parentId;
  });

  readonly rows = computed((): ListRow[] => {
    if (this.onDesktop()) {
      const role = this.auth.currentUser()?.role ?? 'guest';
      return getDesktopItemsForRole(role).map((item) => ({
        id: item.id,
        name: item.label,
        modified: '—',
        type: typeForApp(item.appId),
        size: '',
        icon: item.icon,
        desktopItem: item,
      }));
    }

    const folder = this.folder();
    const role = this.auth.currentUser()?.role;
    if (!folder) {
      return [];
    }
    return folder.entries
      .filter((entry) => !entry.requiredRole || entry.requiredRole === role)
      .map((entry) => ({
        id: entry.id,
        name: entry.name,
        modified: entry.modified,
        type: entry.type,
        size: entry.size,
        icon: iconForEntry(entry),
        entry,
      }));
  });

  get needsPassword(): boolean {
    const folder = this.folder();
    return !!folder?.password && !this.unlocked();
  }

  select(row: ListRow): void {
    this.selectedId.set(row.id);
  }

  goDesktop(): void {
    this.denied.set(false);
    this.navId.set(DESKTOP_NAV);
    this.selectedId.set(null);
    this.unlocked.set(false);
    this.password.set('');
    this.error.set(false);
  }

  goDocuments(): void {
    this.denied.set(false);
    this.navId.set('docs');
    this.selectedId.set(null);
    this.unlocked.set(false);
    this.password.set('');
    this.error.set(false);
  }

  goBack(): void {
    if (this.onDesktop()) {
      this.goDocuments();
      return;
    }
    const folder = this.folder();
    if (!folder?.parentId) {
      return;
    }
    this.denied.set(false);
    this.navId.set(folder.parentId);
    this.selectedId.set(null);
    this.unlocked.set(false);
    this.password.set('');
    this.error.set(false);
  }

  tryUnlock(): void {
    const folder = this.folder();
    if (!folder?.password) {
      return;
    }

    if (this.password() === folder.password) {
      this.unlocked.set(true);
      this.error.set(false);
      this.selectedId.set(folder.entries[0]?.id ?? null);
      return;
    }

    this.error.set(true);
  }

  openRow(row: ListRow): void {
    this.selectedId.set(row.id);

    if (row.desktopItem) {
      this.openDesktopItem(row.desktopItem);
      return;
    }

    if (row.entry) {
      this.openEntry(row.entry);
    }
  }

  private openDesktopItem(item: DesktopItem): void {
    if (item.appId === 'folder') {
      if (item.id === 'docs') {
        this.goDocuments();
        return;
      }
      this.wm.open(item, { folderId: item.id, ...(item.payload ?? {}) });
      return;
    }
    this.wm.open(item, item.payload);
  }

  private openEntry(entry: FolderEntry): void {
    if (entry.kind === 'folder' && entry.childFolderId) {
      const target = getFolder(entry.childFolderId);
      const role = this.auth.currentUser()?.role;
      if (target?.requiredRole && target.requiredRole !== role) {
        this.denied.set(true);
        return;
      }
      this.denied.set(false);
      this.navId.set(entry.childFolderId);
      this.selectedId.set(null);
      this.unlocked.set(false);
      return;
    }

    if (entry.kind === 'image') {
      const isPlaca = entry.scene === 'placa';
      this.wm.open(
        {
          id: `file-${entry.id}`,
          label: entry.name,
          icon: 'image',
          appId: 'viewer',
          windowTitle: entry.name,
          width: isPlaca ? 420 : 460,
          height: isPlaca ? 420 : 390,
          minWidth: 280,
          minHeight: 220,
          maxWidth: 900,
          maxHeight: 700,
        },
        { scene: entry.scene },
      );
      return;
    }

    if (entry.kind === 'document') {
      this.wm.open(
        {
          id: `file-${entry.id}`,
          label: entry.name,
          icon: 'word',
          appId: 'word',
          windowTitle: `${entry.name} - Microsoft Word`,
          width: 640,
          height: 480,
          minWidth: 420,
          minHeight: 320,
          maxWidth: 1100,
          maxHeight: 800,
        },
        { content: entry.content },
      );
      return;
    }

    this.wm.open(
      {
        id: `file-${entry.id}`,
        label: entry.name,
        icon: 'notepad',
        appId: 'notepad',
        windowTitle: `${entry.name} - Bloco de notas`,
        width: 520,
        height: 380,
        minWidth: 280,
        minHeight: 180,
        maxWidth: 1000,
        maxHeight: 720,
      },
      { content: entry.content },
    );
  }
}

function iconForEntry(entry: FolderEntry): DesktopIconKind {
  if (entry.kind === 'folder') {
    return 'folder';
  }
  if (entry.kind === 'image') {
    return 'image';
  }
  return entry.kind === 'document' ? 'word' : 'notepad';
}

function typeForApp(appId: string): string {
  switch (appId) {
    case 'folder':
      return 'Pasta de arquivos';
    case 'ie':
      return 'Atalho para Internet';
    case 'minesweeper':
      return 'Aplicativo';
    case 'outlook':
      return 'Aplicativo';
    case 'lab':
      return 'Aplicativo';
    case 'notepad':
      return 'Documento de texto';
    case 'word':
      return 'Documento do Microsoft Word';
    case 'recycle':
      return 'Lixeira';
    default:
      return 'Atalho';
  }
}
