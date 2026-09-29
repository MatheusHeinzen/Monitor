import { Component, inject, signal } from '@angular/core';
import { RECYCLE_FILES } from '../../core/data/recycle-files';
import { RecycleFile } from '../../core/models/recycle-file';
import { WindowManagerService } from '../../core/services/window-manager.service';
import { AppGlyph } from '../../shared/app-glyph/app-glyph';

@Component({
  selector: 'app-recycle-bin',
  imports: [AppGlyph],
  templateUrl: './recycle-bin.html',
  styleUrl: './recycle-bin.scss',
})
export class RecycleBin {
  private readonly wm = inject(WindowManagerService);
  readonly files = RECYCLE_FILES;
  readonly selectedId = signal<string | null>(RECYCLE_FILES[0]?.id ?? null);

  select(file: RecycleFile): void {
    this.selectedId.set(file.id);
  }

  openFile(file: RecycleFile): void {
    this.selectedId.set(file.id);

    if (file.kind === 'image') {
      this.wm.open(
        {
          id: `file-${file.id}`,
          label: file.name,
          icon: 'image',
          appId: 'viewer',
          windowTitle: file.name,
          width: 460,
          height: 390,
          minWidth: 280,
          minHeight: 220,
          maxWidth: 900,
          maxHeight: 700,
        },
        { scene: file.scene },
      );
      return;
    }

    if (file.kind === 'document') {
      this.wm.open(
        {
          id: `file-${file.id}`,
          label: file.name,
          icon: 'word',
          appId: 'word',
          windowTitle: `${file.name} - Microsoft Word`,
          width: 640,
          height: 480,
          minWidth: 420,
          minHeight: 320,
          maxWidth: 1100,
          maxHeight: 800,
        },
        { content: file.content },
      );
      return;
    }

    this.wm.open(
      {
        id: `file-${file.id}`,
        label: file.name,
        icon: 'notepad',
        appId: 'notepad',
        windowTitle: `${file.name} - Bloco de notas`,
        width: 520,
        height: 380,
        minWidth: 280,
        minHeight: 180,
        maxWidth: 1000,
        maxHeight: 720,
      },
      { content: file.content },
    );
  }

  iconFor(file: RecycleFile): 'notepad' | 'word' | 'image' {
    if (file.kind === 'image') {
      return 'image';
    }
    return file.kind === 'document' ? 'word' : 'notepad';
  }
}
