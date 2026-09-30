import { UserRole } from '../data/auth';

export type MailFolder = 'inbox' | 'projetos' | 'sent' | 'deleted';
export type MailAudience = UserRole | 'both';

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
  audience: MailAudience;
}
