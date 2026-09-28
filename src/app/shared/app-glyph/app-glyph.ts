import { Component, input } from '@angular/core';
import { DesktopIconKind } from '../../core/models/desktop-item';

@Component({
  selector: 'app-glyph',
  templateUrl: './app-glyph.html',
  styleUrl: './app-glyph.scss',
})
export class AppGlyph {
  readonly kind = input.required<DesktopIconKind>();
}
