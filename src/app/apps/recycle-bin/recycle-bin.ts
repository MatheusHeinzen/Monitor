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
        },
        { scene: file.scene },
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
      },
      { content: file.content },
    );
  }

  iconFor(file: RecycleFile): 'notepad' | 'image' {
    return file.kind === 'image' ? 'image' : 'notepad';
  }
}
