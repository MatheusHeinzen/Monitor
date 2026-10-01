import { Component, input, linkedSignal, signal } from '@angular/core';
import { DEFAULT_NOTES } from '../../core/data/notes';

type NotepadPayload = {
  content?: string;
  persistKey?: string;
};

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.html',
  styleUrl: './notepad.scss',
})
export class NotepadApp {
  readonly payload = input<unknown>();
  readonly wordWrap = signal(false);
  readonly text = linkedSignal(() => {
    const payload = this.payload() as NotepadPayload | undefined;
    if (payload?.persistKey) {
      const saved = localStorage.getItem(payload.persistKey);
      if (saved !== null) {
        return saved;
      }
    }
    return payload?.content ?? DEFAULT_NOTES;
  });

  toggleWrap(): void {
    this.wordWrap.update((value) => !value);
  }

  onInput(event: Event): void {
    const value = (event.target as HTMLTextAreaElement).value;
    this.text.set(value);
    const persistKey = (this.payload() as NotepadPayload | undefined)?.persistKey;
    if (persistKey) {
      localStorage.setItem(persistKey, value);
    }
  }
}
