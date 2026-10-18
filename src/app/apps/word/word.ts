import { afterNextRender, Component, computed, ElementRef, inject, input, linkedSignal, signal } from '@angular/core';

type RibbonTab = 'inicio' | 'inserir' | 'layout' | 'revisao' | 'exibicao';

@Component({
  selector: 'app-word',
  templateUrl: './word.html',
  styleUrl: './word.scss',
})
export class WordApp {
  private readonly host = inject(ElementRef<HTMLElement>);
  readonly payload = input<unknown>();
  readonly tab = signal<RibbonTab>('inicio');
  readonly text = linkedSignal(() => {
    const payload = this.payload() as { content?: string } | undefined;
    return payload?.content ?? '';
  });
  readonly page = computed(() => {
    const payload = this.payload() as { page?: string } | undefined;
    return payload?.page ?? '';
  });
  private readonly reportWords = signal(0);
  readonly wordCount = computed(() => {
    if (this.page() === 'sonda-88') {
      return this.reportWords();
    }
    const trimmed = this.text().trim();
    return trimmed ? trimmed.split(/\s+/).length : 0;
  });

  readonly tabs: { id: RibbonTab; label: string }[] = [
    { id: 'inicio', label: 'Início' },
    { id: 'inserir', label: 'Inserir' },
    { id: 'layout', label: 'Layout da Página' },
    { id: 'revisao', label: 'Revisão' },
    { id: 'exibicao', label: 'Exibição' },
  ];

  constructor() {
    afterNextRender(() => this.countReport());
  }

  selectTab(id: RibbonTab): void {
    this.tab.set(id);
  }

  onInput(event: Event): void {
    this.text.set((event.target as HTMLTextAreaElement).value);
  }

  private countReport(): void {
    const article = this.host.nativeElement.querySelector('.report');
    const trimmed = article?.textContent?.replace(/\s+/g, ' ').trim() ?? '';
    this.reportWords.set(trimmed ? trimmed.split(' ').length : 0);
  }
}
