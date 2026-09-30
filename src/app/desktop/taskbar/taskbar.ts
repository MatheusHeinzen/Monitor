import { Component, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';
import { AppWindow } from '../../core/models/app-window';
import { AuthService } from '../../core/services/auth.service';
import { WindowManagerService } from '../../core/services/window-manager.service';

@Component({
  selector: 'app-taskbar',
  templateUrl: './taskbar.html',
  styleUrl: './taskbar.scss',
})
export class Taskbar {
  private readonly wm = inject(WindowManagerService);
  private readonly auth = inject(AuthService);
  readonly windows = this.wm.windows;
  readonly time = signal(formatClock(new Date()));
  readonly userLabel = computed(() => this.auth.currentUser()?.username ?? '');

  constructor() {
    interval(1000)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.time.set(formatClock(new Date())));
  }

  onTaskClick(win: AppWindow): void {
    this.wm.focus(win.id);
  }

  logout(): void {
    this.auth.logout();
  }
}

function formatClock(date: Date): string {
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
}
