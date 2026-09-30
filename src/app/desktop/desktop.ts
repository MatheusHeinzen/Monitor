import { Component, inject, signal } from '@angular/core';
import { DESKTOP_ITEMS } from '../core/data/desktop-items';
import { DesktopItem } from '../core/models/desktop-item';
import { WindowManagerService } from '../core/services/window-manager.service';
import { DesktopIcon } from './desktop-icon/desktop-icon';
import { Taskbar } from './taskbar/taskbar';
import { WindowFrame } from './window/window';

@Component({
  selector: 'app-desktop',
  imports: [DesktopIcon, WindowFrame, Taskbar],
  templateUrl: './desktop.html',
  styleUrl: './desktop.scss',
})
export class Desktop {
  private readonly wm = inject(WindowManagerService);
  readonly items = DESKTOP_ITEMS;
  readonly windows = this.wm.windows;
  readonly selectedId = signal<string | null>(null);

  select(item: DesktopItem): void {
    this.selectedId.set(item.id);
  }

  open(item: DesktopItem): void {
    this.selectedId.set(item.id);
    if (item.appId === 'folder') {
      this.wm.open(item, { folderId: item.id });
      return;
    }
    this.wm.open(item);
  }

  clearSelection(): void {
    this.selectedId.set(null);
  }
}
