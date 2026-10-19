import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

type IePage = 'error' | 'leet';

@Component({
  selector: 'app-internet-explorer',
  imports: [FormsModule],
  templateUrl: './internet-explorer.html',
  styleUrl: './internet-explorer.scss',
})
export class InternetExplorerApp {
  readonly address = signal('about:blank');
  readonly page = signal<IePage>('error');
  readonly status = computed(() =>
    this.page() === 'leet' ? 'Concluído' : 'Concluído, mas com erros nesta página',
  );

  goHome(): void {
    this.address.set('about:blank');
    this.page.set('error');
  }

  refresh(): void {
    this.navigate();
  }

  navigate(): void {
    const value = this.address().trim();
    if (!value) {
      this.address.set('about:blank');
      this.page.set('error');
      return;
    }
    this.page.set(this.isLeetSearch(value) ? 'leet' : 'error');
  }

  stop(): void {
    this.page.set('error');
  }

  private isLeetSearch(value: string): boolean {
    const query = value.match(/[?&]q=([^&#]+)/i)?.[1];
    const term = decodeURIComponent(query ?? value)
      .trim()
      .toLowerCase()
      .replace(/^https?:\/\//, '')
      .replace(/^www\./, '')
      .replace(/\/.*$/, '')
      .replace(/\.(com|net|org)$/, '');
    return term === 'leet' || term === 'leetspeak' || term === '1337';
  }
}
