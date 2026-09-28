export type MailFolder = 'inbox' | 'sent' | 'deleted';

export interface MailMessage {
  id: string;
  folder: MailFolder;
  from: string;
  fromEmail: string;
  to: string;
  subject: string;
  received: string;
  unread: boolean;
  body: string;
}
