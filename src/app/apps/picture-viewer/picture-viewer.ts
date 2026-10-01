import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-picture-viewer',
  templateUrl: './picture-viewer.html',
  styleUrl: './picture-viewer.scss',
})
export class PictureViewer {
  readonly payload = input<unknown>();

  readonly scene = computed(() => {
    const payload = this.payload() as { scene?: string } | undefined;
    return payload?.scene ?? '';
  });

  readonly title = computed(() => {
    switch (this.scene()) {
      case 'placa':
        return 'placa_entrada.jpg';
      case 'beach':
        return 'ferias_2006.jpg';
      default:
        return 'Imagem';
    }
  });
}
