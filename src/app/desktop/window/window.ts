import { Component, inject, input } from '@angular/core';
import { FolderExplorer } from '../../apps/folder-explorer/folder-explorer';
import { InternetExplorerApp } from '../../apps/internet-explorer/internet-explorer';
import { LabMonitorApp } from '../../apps/lab-monitor/lab-monitor';
import { MinesweeperApp } from '../../apps/minesweeper/minesweeper';
import { OutlookApp } from '../../apps/outlook/outlook';
import { NotepadApp } from '../../apps/notepad/notepad';
import { PictureViewer } from '../../apps/picture-viewer/picture-viewer';
import { RecycleBin } from '../../apps/recycle-bin/recycle-bin';
import { WordApp } from '../../apps/word/word';
import { AppWindow, ResizeEdge } from '../../core/models/app-window';
import { WindowManagerService } from '../../core/services/window-manager.service';
import { AppGlyph } from '../../shared/app-glyph/app-glyph';

const RESIZE_EDGES: ResizeEdge[] = ['n', 's', 'e', 'w', 'ne', 'nw', 'se', 'sw'];

@Component({
  selector: 'app-window',
  imports: [
    AppGlyph,
    RecycleBin,
    OutlookApp,
    NotepadApp,
    WordApp,
    LabMonitorApp,
    PictureViewer,
    FolderExplorer,
    MinesweeperApp,
    InternetExplorerApp,
  ],
  templateUrl: './window.html',
  styleUrl: './window.scss',
  host: {
    '[style.left.px]': 'win().x',
    '[style.top.px]': 'win().y',
    '[style.width.px]': 'win().width',
    '[style.height.px]': 'win().height',
    '[style.z-index]': 'win().zIndex',
    '(pointerdown)': 'onFocus()',
  },
})
export class WindowFrame {
  private readonly wm = inject(WindowManagerService);
  readonly win = input.required<AppWindow>();
  readonly edges = RESIZE_EDGES;

  onFocus(): void {
    this.wm.focus(this.win().id);
  }

  onTitlePointerDown(event: PointerEvent): void {
    this.wm.focus(this.win().id);
    if ((event.target as HTMLElement).closest('.controls')) {
      return;
    }

    const current = this.win();
    const offsetX = event.clientX - current.x;
    const offsetY = event.clientY - current.y;
    const title = event.currentTarget as HTMLElement;
    title.setPointerCapture(event.pointerId);

    const onMove = (moveEvent: PointerEvent) => {
      this.wm.move(current.id, moveEvent.clientX - offsetX, moveEvent.clientY - offsetY);
    };
    const onUp = () => {
      title.removeEventListener('pointermove', onMove);
      title.removeEventListener('pointerup', onUp);
    };

    title.addEventListener('pointermove', onMove);
    title.addEventListener('pointerup', onUp);
  }

  onResizePointerDown(event: PointerEvent, edge: ResizeEdge): void {
    event.stopPropagation();
    event.preventDefault();

    const current = this.win();
    this.wm.focus(current.id);

    const origin = {
      window: { ...current },
      pointerX: event.clientX,
      pointerY: event.clientY,
    };

    const handle = event.currentTarget as HTMLElement;
    handle.setPointerCapture(event.pointerId);

    const onMove = (moveEvent: PointerEvent) => {
      this.wm.resize(current.id, edge, moveEvent.clientX, moveEvent.clientY, origin);
    };
    const onUp = () => {
      handle.removeEventListener('pointermove', onMove);
      handle.removeEventListener('pointerup', onUp);
    };

    handle.addEventListener('pointermove', onMove);
    handle.addEventListener('pointerup', onUp);
  }

  minimize(event: Event): void {
    event.stopPropagation();
    this.wm.minimize(this.win().id);
  }

  close(event: Event): void {
    event.stopPropagation();
    this.wm.close(this.win().id);
  }
}
