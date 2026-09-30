import { Injectable, signal } from '@angular/core';
import { AppWindow, ResizeEdge } from '../models/app-window';
import { DesktopItem } from '../models/desktop-item';

const TASKBAR_HEIGHT = 30;
const TITLE_BAR_HEIGHT = 28;
const DEFAULT_MIN_WIDTH = 240;
const DEFAULT_MIN_HEIGHT = 160;

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

    const minWidth = item.minWidth ?? DEFAULT_MIN_WIDTH;
    const minHeight = item.minHeight ?? DEFAULT_MIN_HEIGHT;
    const maxWidth = item.maxWidth ?? Math.max(minWidth, viewportMaxWidth());
    const maxHeight = item.maxHeight ?? Math.max(minHeight, viewportMaxHeight());

    const window: AppWindow = {
      id: `win-${this.nextId++}`,
      instanceKey: item.id,
      appId: item.appId,
      title: item.windowTitle ?? item.label,
      icon: item.icon,
      x: 48 + offset,
      y: 32 + offset,
      width: clamp(item.width ?? 480, minWidth, maxWidth),
      height: clamp(item.height ?? 320, minHeight, maxHeight),
      minWidth,
      minHeight,
      maxWidth,
      maxHeight,
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

  closeAll(): void {
    this.windowsState.set([]);
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

  resize(
    id: string,
    edge: ResizeEdge,
    pointerX: number,
    pointerY: number,
    origin: { window: AppWindow; pointerX: number; pointerY: number },
  ): void {
    const start = origin.window;
    const dx = pointerX - origin.pointerX;
    const dy = pointerY - origin.pointerY;

    const maxW = Math.min(start.maxWidth, viewportMaxWidth());
    const maxH = Math.min(start.maxHeight, viewportMaxHeight());

    let x = start.x;
    let y = start.y;
    let width = start.width;
    let height = start.height;

    if (edge.includes('e')) {
      width = clamp(start.width + dx, start.minWidth, maxW);
    }
    if (edge.includes('w')) {
      width = clamp(start.width - dx, start.minWidth, Math.min(maxW, start.x + start.width));
      x = start.x + start.width - width;
    }
    if (edge.includes('s')) {
      height = clamp(
        start.height + dy,
        start.minHeight,
        Math.min(maxH, globalThis.innerHeight - TASKBAR_HEIGHT - start.y),
      );
    }
    if (edge.includes('n')) {
      height = clamp(start.height - dy, start.minHeight, Math.min(maxH, start.y + start.height));
      y = clamp(start.y + start.height - height, 0, start.y + start.height - start.minHeight);
    }

    this.windowsState.update((list) =>
      list.map((window) => (window.id === id ? { ...window, x, y, width, height } : window)),
    );
  }
}

function viewportMaxWidth(): number {
  return Math.max(DEFAULT_MIN_WIDTH, globalThis.innerWidth - 24);
}

function viewportMaxHeight(): number {
  return Math.max(DEFAULT_MIN_HEIGHT, globalThis.innerHeight - TASKBAR_HEIGHT - 16);
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}
