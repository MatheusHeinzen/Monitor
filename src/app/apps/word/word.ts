import { Component, computed, input, linkedSignal, signal } from '@angular/core';

type RibbonTab = 'inicio' | 'inserir' | 'layout' | 'revisao' | 'exibicao';

@Component({
  selector: 'app-word',
  templateUrl: './word.html',
  styleUrl: './word.scss',
})
export class WordApp {
  readonly payload = input<unknown>();
  readonly tab = signal<RibbonTab>('inicio');
  readonly text = linkedSignal(() => {
    const payload = this.payload() as { content?: string } | undefined;
    return payload?.content ?? '';
  });
  readonly wordCount = computed(() => {
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

  selectTab(id: RibbonTab): void {
    this.tab.set(id);
  }

  onInput(event: Event): void {
    this.text.set((event.target as HTMLTextAreaElement).value);
  }
}
