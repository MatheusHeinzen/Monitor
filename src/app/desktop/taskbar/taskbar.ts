import { Component, computed, HostListener, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';
import { getDesktopItemsForRole } from '../../core/data/desktop-items';
import { AppWindow } from '../../core/models/app-window';
import { DesktopItem } from '../../core/models/desktop-item';
import { AuthService } from '../../core/services/auth.service';
import { WindowManagerService } from '../../core/services/window-manager.service';
import { AppGlyph } from '../../shared/app-glyph/app-glyph';

@Component({
  selector: 'app-taskbar',
  imports: [AppGlyph],
  templateUrl: './taskbar.html',
  styleUrl: './taskbar.scss',
})
export class Taskbar {
  private readonly wm = inject(WindowManagerService);
  private readonly auth = inject(AuthService);
  readonly windows = this.wm.windows;
  readonly time = signal(formatClock(new Date()));
  readonly userLabel = computed(() => this.auth.currentUser()?.username ?? '');
  readonly menuOpen = signal(false);
  readonly menuItems = computed(() => {
    const role = this.auth.currentUser()?.role ?? 'guest';
    const preferred = ['ie', 'outlook', 'docs', 'lab', 'minesweeper', 'notepad', 'player-notes'];
    return getDesktopItemsForRole(role)
      .filter((item) => item.appId !== 'recycle')
      .sort((a, b) => {
        const ai = preferred.indexOf(a.id);
        const bi = preferred.indexOf(b.id);
        const av = ai === -1 ? preferred.length : ai;
        const bv = bi === -1 ? preferred.length : bi;
        return av - bv;
      });
  });

  constructor() {
    interval(1000)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.time.set(formatClock(new Date())));
  }

  @HostListener('document:click')
  onDocumentClick(): void {
    if (this.menuOpen()) {
      this.menuOpen.set(false);
    }
  }

  toggleMenu(event: MouseEvent): void {
    event.stopPropagation();
    this.menuOpen.update((open) => !open);
  }

  openItem(item: DesktopItem, event: MouseEvent): void {
    event.stopPropagation();
    this.menuOpen.set(false);
    if (item.appId === 'folder') {
      this.wm.open(item, { folderId: item.id, ...(item.payload ?? {}) });
      return;
    }
    this.wm.open(item, item.payload);
  }

  onTaskClick(win: AppWindow): void {
    this.menuOpen.set(false);
    this.wm.focus(win.id);
  }

  logout(): void {
    this.menuOpen.set(false);
    this.auth.logout();
  }
}

function formatClock(date: Date): string {
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
}
