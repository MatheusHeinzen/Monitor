import { Component, input, linkedSignal, signal } from '@angular/core';
import { DEFAULT_NOTES } from '../../core/data/notes';

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.html',
  styleUrl: './notepad.scss',
})
export class NotepadApp {
  readonly payload = input<unknown>();
  readonly wordWrap = signal(false);
  readonly text = linkedSignal(() => {
    const payload = this.payload() as { content?: string } | undefined;
    return payload?.content ?? DEFAULT_NOTES;
  });

  toggleWrap(): void {
    this.wordWrap.update((value) => !value);
  }

  onInput(event: Event): void {
    this.text.set((event.target as HTMLTextAreaElement).value);
  }
}
