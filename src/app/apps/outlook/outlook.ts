import { Component, computed, signal } from '@angular/core';
import { MAIL_MESSAGES } from '../../core/data/emails';
import { MailFolder, MailMessage } from '../../core/models/mail-message';

@Component({
  selector: 'app-outlook',
  templateUrl: './outlook.html',
  styleUrl: './outlook.scss',
})
export class OutlookApp {
  readonly folders: { id: MailFolder; label: string }[] = [
    { id: 'inbox', label: 'Caixa de Entrada' },
    { id: 'sent', label: 'Itens Enviados' },
    { id: 'deleted', label: 'Itens Excluídos' },
  ];

  readonly folder = signal<MailFolder>('inbox');
  readonly selectedId = signal(MAIL_MESSAGES[0].id);
  private readonly readIds = signal(new Set<string>());

  readonly messages = computed(() =>
    MAIL_MESSAGES.filter((mail) => mail.folder === this.folder()),
  );

  readonly selected = computed(() => {
    const current = this.messages().find((mail) => mail.id === this.selectedId());
    return current ?? this.messages()[0] ?? null;
  });

  isUnread(mail: MailMessage): boolean {
    return mail.unread && !this.readIds().has(mail.id);
  }

  unreadCount(id: MailFolder): number {
    return MAIL_MESSAGES.filter((mail) => mail.folder === id && this.isUnread(mail)).length;
  }

  openFolder(id: MailFolder): void {
    this.folder.set(id);
    const first = MAIL_MESSAGES.find((mail) => mail.folder === id);
    this.selectedId.set(first?.id ?? '');
  }

  openMail(mail: MailMessage): void {
    this.selectedId.set(mail.id);
    this.readIds.update((ids) => {
      const next = new Set(ids);
      next.add(mail.id);
      return next;
    });
  }
}
