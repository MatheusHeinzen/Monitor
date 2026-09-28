import { Injectable, signal } from '@angular/core';
import { AppWindow } from '../models/app-window';
import { DesktopItem } from '../models/desktop-item';

const TASKBAR_HEIGHT = 30;
const TITLE_BAR_HEIGHT = 28;

@Injectable({ providedIn: 'root' })
export class WindowManagerService {
  private readonly windowsState = signal<AppWindow[]>([]);
  private nextZ = 1;
  private nextId = 1;

  readonly windows = this.windowsState.asReadonly();

  open(item: DesktopItem, payload?: unknown): void {
    const existing = this.windowsState().find((window) => window.instanceKey === item.id);
    if (existing) {
      this.focus(existing.id);
      return;
    }

    const offset = (this.windowsState().length % 6) * 24;
    this.nextZ += 1;

    const window: AppWindow = {
      id: `win-${this.nextId++}`,
      instanceKey: item.id,
      appId: item.appId,
      title: item.windowTitle ?? item.label,
      icon: item.icon,
      x: 48 + offset,
      y: 32 + offset,
      width: item.width ?? 480,
      height: item.height ?? 320,
      zIndex: this.nextZ,
      minimized: false,
      focused: true,
      payload,
    };

    this.windowsState.update((list) => [
      ...list.map((itemWindow) => ({ ...itemWindow, focused: false })),
      window,
    ]);
  }

  focus(id: string): void {
    const current = this.windowsState().find((window) => window.id === id);
    if (!current) {
      return;
    }

    this.nextZ += 1;
    this.windowsState.update((list) =>
      list.map((window) =>
        window.id === id
          ? { ...window, focused: true, minimized: false, zIndex: this.nextZ }
          : { ...window, focused: false },
      ),
    );
  }

  minimize(id: string): void {
    this.windowsState.update((list) =>
      list.map((window) =>
        window.id === id ? { ...window, minimized: true, focused: false } : window,
      ),
    );
  }

  close(id: string): void {
    this.windowsState.update((list) => list.filter((window) => window.id !== id));
  }

  move(id: string, x: number, y: number): void {
    const maxX = globalThis.innerWidth - 80;
    const maxY = globalThis.innerHeight - TASKBAR_HEIGHT - TITLE_BAR_HEIGHT;

    this.windowsState.update((list) =>
      list.map((window) =>
        window.id === id
          ? {
              ...window,
              x: clamp(x, -window.width + 80, maxX),
              y: clamp(y, 0, maxY),
            }
          : window,
      ),
    );
  }
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}
