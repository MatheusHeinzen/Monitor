import { Component, input, output } from '@angular/core';
import { DesktopItem } from '../../core/models/desktop-item';

@Component({
  selector: 'app-desktop-icon',
  templateUrl: './desktop-icon.html',
  styleUrl: './desktop-icon.scss',
})
export class DesktopIcon {
  readonly item = input.required<DesktopItem>();
  readonly selected = input(false);
  readonly select = output<DesktopItem>();
  readonly open = output<DesktopItem>();

  onClick(event: MouseEvent): void {
    event.stopPropagation();
    this.select.emit(this.item());
  }

  onDblClick(event: MouseEvent): void {
    event.stopPropagation();
    this.open.emit(this.item());
  }
}
