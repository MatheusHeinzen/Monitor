import { Component, computed, inject, signal } from '@angular/core';
import { MAIL_MESSAGES } from '../../core/data/emails';
import { MailFolder, MailMessage } from '../../core/models/mail-message';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-outlook',
  templateUrl: './outlook.html',
  styleUrl: './outlook.scss',
})
export class OutlookApp {
  private readonly auth = inject(AuthService);

  readonly folders = computed(() => {
    const role = this.auth.currentUser()?.role;
    const base: { id: MailFolder; label: string }[] = [
      { id: 'inbox', label: 'Caixa de Entrada' },
    ];
    if (role === 'helio') {
      base.push({ id: 'projetos', label: 'Projetos' });
    }
    base.push(
      { id: 'sent', label: 'Itens Enviados' },
      { id: 'deleted', label: 'Itens Excluídos' },
    );
    return base;
  });

  readonly folder = signal<MailFolder>('inbox');
  readonly selectedId = signal('');
  private readonly readIds = signal(new Set<string>());

  private readonly visibleMail = computed(() => {
    const role = this.auth.currentUser()?.role ?? 'guest';
    return MAIL_MESSAGES.filter(
      (mail) => mail.audience === 'both' || mail.audience === role,
    );
  });

  readonly messages = computed(() =>
    this.visibleMail().filter((mail) => mail.folder === this.folder()),
  );

  readonly selected = computed(() => {
    const current = this.messages().find((mail) => mail.id === this.selectedId());
    return current ?? this.messages()[0] ?? null;
  });

  isUnread(mail: MailMessage): boolean {
    return mail.unread && !this.readIds().has(mail.id);
  }

  unreadCount(id: MailFolder): number {
    return this.visibleMail().filter((mail) => mail.folder === id && this.isUnread(mail)).length;
  }

  openFolder(id: MailFolder): void {
    this.folder.set(id);
    const first = this.visibleMail().find((mail) => mail.folder === id);
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
