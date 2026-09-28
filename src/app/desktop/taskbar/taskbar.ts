import { Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';
import { AppWindow } from '../../core/models/app-window';
import { WindowManagerService } from '../../core/services/window-manager.service';

@Component({
  selector: 'app-taskbar',
  templateUrl: './taskbar.html',
  styleUrl: './taskbar.scss',
})
export class Taskbar {
  private readonly wm = inject(WindowManagerService);
  readonly windows = this.wm.windows;
  readonly time = signal(formatClock(new Date()));

  constructor() {
    interval(1000)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.time.set(formatClock(new Date())));
  }

  onTaskClick(win: AppWindow): void {
    this.wm.focus(win.id);
  }
}

function formatClock(date: Date): string {
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
}
