import { Component, inject, input } from '@angular/core';
import { AppWindow } from '../../core/models/app-window';
import { WindowManagerService } from '../../core/services/window-manager.service';

@Component({
  selector: 'app-window',
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

  minimize(event: Event): void {
    event.stopPropagation();
    this.wm.minimize(this.win().id);
  }

  close(event: Event): void {
    event.stopPropagation();
    this.wm.close(this.win().id);
  }
}
