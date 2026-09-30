import { Component, input, output } from '@angular/core';
import { DesktopItem } from '../../core/models/desktop-item';
import { AppGlyph } from '../../shared/app-glyph/app-glyph';

@Component({
  selector: 'app-desktop-icon',
  imports: [AppGlyph],
  templateUrl: './desktop-icon.html',
  styleUrl: './desktop-icon.scss',
  host: {
    '[style.top.px]': 'item().desktopY ?? 0',
    '[style.left.px]': 'item().desktopSide === "right" ? null : (item().desktopX ?? 0)',
    '[style.right.px]': 'item().desktopSide === "right" ? (item().desktopX ?? 0) : null',
  },
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
