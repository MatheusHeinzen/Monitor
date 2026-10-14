import { Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { InvestigationService } from '../../core/services/investigation.service';
import { runShell } from './shell';

interface Block {
  prompt: string;
  command: string;
  lines: string[];
}

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.html',
  styleUrl: './terminal.scss',
})
export class TerminalApp {
  private readonly investigation = inject(InvestigationService);
  private readonly inputRef = viewChild<ElementRef<HTMLInputElement>>('cmd');
  private readonly logRef = viewChild<ElementRef<HTMLElement>>('log');

  readonly blocks = signal<Block[]>([]);
  readonly cwd = signal('/home/helio');
  readonly draft = signal('');
  private readonly past = signal<string[]>([]);
  private cursor = -1;

  prompt(): string {
    return `helio@estacao:${shortPath(this.cwd())}$`;
  }

  focusInput(): void {
    this.inputRef()?.nativeElement.focus();
  }

  onKey(event: KeyboardEvent): void {
    if (event.key !== 'ArrowUp' && event.key !== 'ArrowDown') {
      return;
    }
    event.preventDefault();
    const past = this.past();
    if (!past.length) {
      return;
    }
    if (event.key === 'ArrowUp') {
      this.cursor = Math.min(this.cursor + 1, past.length - 1);
    } else {
      this.cursor = Math.max(this.cursor - 1, -1);
    }
    this.draft.set(this.cursor === -1 ? '' : past[this.cursor]);
  }

  submit(event: Event): void {
    event.preventDefault();
    const command = this.draft().trim();
    const cwd = this.cwd();
    const reply = runShell(cwd, command);
    if (command) {
      this.past.update((list) => [command, ...list].slice(0, 40));
    }
    this.cursor = -1;
    this.draft.set('');
    this.cwd.set(reply.cwd);

    if (reply.effect === 'stop') {
      this.investigation.tryShutdownPump();
    }
    if (reply.effect === 'bleed') {
      this.investigation.openCoolant();
    }

    if (reply.clear) {
      this.blocks.set([]);
      return;
    }

    this.blocks.update((list) => [
      ...list,
      { prompt: `helio@estacao:${shortPath(cwd)}$`, command, lines: reply.lines },
    ]);
    queueMicrotask(() => {
      this.focusInput();
      const log = this.logRef()?.nativeElement;
      if (log) {
        log.scrollTop = log.scrollHeight;
      }
    });
  }
}

function shortPath(path: string): string {
  if (path === '/home/helio') {
    return '~';
  }
  if (path.startsWith('/home/helio/')) {
    return `~${path.slice('/home/helio'.length)}`;
  }
  return path || '/';
}
