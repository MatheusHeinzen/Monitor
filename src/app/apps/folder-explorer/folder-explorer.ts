import { Component, computed, inject, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { getFolder } from '../../core/data/folders';
import { FolderDefinition, FolderEntry } from '../../core/models/folder-item';
import { AuthService } from '../../core/services/auth.service';
import { WindowManagerService } from '../../core/services/window-manager.service';
import { AppGlyph } from '../../shared/app-glyph/app-glyph';

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

  readonly folder = computed((): FolderDefinition | undefined => {
    const data = this.payload() as { folderId?: string } | null;
    const id = this.navId() ?? data?.folderId ?? '';
    return getFolder(id);
  });

  readonly visibleEntries = computed(() => {
    const folder = this.folder();
    const role = this.auth.currentUser()?.role;
    if (!folder) {
      return [];
    }
    return folder.entries.filter((entry) => {
      if (!entry.requiredRole) {
        return true;
      }
      return role === entry.requiredRole;
    });
  });

  get needsPassword(): boolean {
    const folder = this.folder();
    return !!folder?.password && !this.unlocked();
  }

  select(entry: FolderEntry): void {
    this.selectedId.set(entry.id);
  }

  goBack(): void {
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

  openEntry(entry: FolderEntry): void {
    this.selectedId.set(entry.id);

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
      this.wm.open(
        {
          id: `file-${entry.id}`,
          label: entry.name,
          icon: 'image',
          appId: 'viewer',
          windowTitle: entry.name,
          width: 460,
          height: 390,
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

  iconFor(entry: FolderEntry): 'notepad' | 'word' | 'image' | 'folder' {
    if (entry.kind === 'folder') {
      return 'folder';
    }
    if (entry.kind === 'image') {
      return 'image';
    }
    return entry.kind === 'document' ? 'word' : 'notepad';
  }
}
