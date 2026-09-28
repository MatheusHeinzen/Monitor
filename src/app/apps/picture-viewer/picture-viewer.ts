import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-picture-viewer',
  templateUrl: './picture-viewer.html',
  styleUrl: './picture-viewer.scss',
})
export class PictureViewer {
  readonly payload = input<unknown>();

  readonly title = computed(() => {
    const payload = this.payload() as { scene?: string } | undefined;
    return payload?.scene === 'beach' ? 'ferias_2006.jpg' : 'Imagem';
  });
}
