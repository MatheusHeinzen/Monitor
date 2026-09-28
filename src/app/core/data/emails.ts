import { MailMessage } from '../models/mail-message';

export const MAIL_MESSAGES: MailMessage[] = [
  {
    id: 'mail-1',
    folder: 'inbox',
    from: 'TI Corporativo',
    fromEmail: 'ti@monitor.local',
    to: 'Usuario',
    subject: 'Manutenção do servidor Monitor',
    received: '28/09/2006 08:14',
    unread: true,
    body: `Bom dia,

Amanhã, às 22h, o servidor Monitor sai do ar para manutenção.

Salve seus arquivos locais. O Outlook continua funcionando, mas o envio pode atrasar.

Qualquer dúvida, responda este e-mail.

Atenciosamente,
Suporte de TI
`,
  },
  {
    id: 'mail-2',
    folder: 'inbox',
    from: 'Maria Santos',
    fromEmail: 'maria.santos@monitor.local',
    to: 'Usuario',
    subject: 'Relatório mensal',
    received: '27/09/2006 17:02',
    unread: true,
    body: `Oi,

Consegue mandar o relatório de setembro ainda hoje?

Vi que uma cópia antiga foi para a lixeira. Se for a versão boa, restaura e me envia.

Obrigada,
Maria
`,
  },
  {
    id: 'mail-3',
    folder: 'inbox',
    from: 'Reuniões',
    fromEmail: 'agenda@monitor.local',
    to: 'Usuario',
    subject: 'Lembrete: reunião das 14h30',
    received: '28/09/2006 11:40',
    unread: false,
    body: `Lembrete automático

Assunto: Acompanhamento do sistema Monitor
Horário: 14h30
Sala: 2B

Leve as anotações do bloco de notas.
`,
  },
  {
    id: 'mail-4',
    folder: 'inbox',
    from: 'Microsoft Office Outlook',
    fromEmail: 'outlook@microsoft.com',
    to: 'Usuario',
    subject: 'Bem-vindo ao Outlook 2007',
    received: '12/01/2007 09:00',
    unread: false,
    body: `Bem-vindo ao Microsoft Office Outlook 2007.

Use o painel à esquerda para abrir a Caixa de Entrada.
As mensagens não lidas aparecem em negrito.
Clique em uma mensagem para lê-la no painel ao lado.

Dica: os arquivos excluídos vão para a Lixeira da área de trabalho, não para Itens Excluídos.
`,
  },
  {
    id: 'mail-5',
    folder: 'sent',
    from: 'Usuario',
    fromEmail: 'usuario@monitor.local',
    to: 'Maria Santos',
    subject: 'Re: Relatório mensal',
    received: '27/09/2006 17:40',
    unread: false,
    body: `Maria,

Vou conferir a lixeira e te aviso.

Abraço
`,
  },
  {
    id: 'mail-6',
    folder: 'deleted',
    from: 'Promoções',
    fromEmail: 'ofertas@spam.local',
    to: 'Usuario',
    subject: 'GANHE um notebook novo!!!',
    received: '20/09/2006 03:11',
    unread: false,
    body: `Oferta imperdível que ninguém pediu.

Este e-mail foi para os Itens Excluídos.
`,
  },
];
