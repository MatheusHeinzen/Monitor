import { MailMessage } from '../models/mail-message';

export const MAIL_MESSAGES: MailMessage[] = [
  {
    id: 'mail-backup',
    folder: 'inbox',
    from: 'Backup',
    fromEmail: 'backup@lab.local',
    to: 'suporte_ti@lab.local',
    subject: 'Backup noturno concluído',
    received: '04/04/1988 03:12',
    unread: false,
    audience: 'guest',
    body: `Backup da noite ok.
Dois diretórios da pasta compartilhada ficaram de fora por ACL.
`,
  },
  {
    id: 'mail-disco',
    folder: 'inbox',
    from: 'Monitoramento',
    fromEmail: 'noc@lab.local',
    to: 'suporte_ti@lab.local',
    subject: 'Disco da estação 10.0.7.4 em 91%',
    received: '05/04/1988 08:40',
    unread: true,
    audience: 'guest',
    body: `Plantão,

O volume C: da estação da recepção passou de 90%.
Limpar temporários e a fila de impressão antes de sexta.
`,
  },
  {
    id: 'mail-reuniao',
    folder: 'inbox',
    from: 'Agenda TI',
    fromEmail: 'agenda@lab.local',
    to: 'suporte_ti@lab.local',
    subject: 'Reunião de terça cancelada',
    received: '05/04/1988 17:05',
    unread: false,
    audience: 'guest',
    body: `A reunião semanal de infraestrutura foi cancelada.
Próxima data ainda sem sala.
`,
  },
  {
    id: 'mail-mouse',
    folder: 'inbox',
    from: 'Recepção',
    fromEmail: 'recepcao@lab.local',
    to: 'suporte_ti@lab.local',
    subject: 'Mouse da recepção travando',
    received: '06/04/1988 10:22',
    unread: false,
    audience: 'guest',
    body: `O mouse da mesa da entrada anda aos saltos.
Já trocamos o tapete. Podem olhar quando passarem?
`,
  },
  {
    id: 'mail-ramal',
    folder: 'inbox',
    from: 'Facilities',
    fromEmail: 'facilities@lab.local',
    to: 'suporte_ti@lab.local',
    subject: 'Ramal 214 sem tom',
    received: '06/04/1988 14:18',
    unread: true,
    audience: 'guest',
    body: `Ramal da sala 1B mudo desde o almoço.
Não é o aparelho: testamos outro e continua sem linha.
`,
  },
  {
    id: 'mail-boas-vindas',
    folder: 'inbox',
    from: 'RH Sindiminas',
    fromEmail: 'rh@sindiminas.org',
    to: 'suporte_ti@lab.local',
    subject: 'Conta nova — helio',
    received: '06/01/1988 09:14',
    unread: false,
    audience: 'guest',
    body: `Plantão,

A conta helio foi criada para o Dr. Hélio Vance.
Senha provisória de primeiro acesso. Ele precisa trocar no mesmo dia.

RH
`,
  },
  {
    id: 'mail-antivirus',
    folder: 'inbox',
    from: 'Segurança',
    fromEmail: 'seguranca@lab.local',
    to: 'suporte_ti@lab.local',
    subject: 'Assinatura de vírus desatualizada',
    received: '07/04/1988 07:55',
    unread: false,
    audience: 'guest',
    body: `Três estações do Nível 1 estão com a base de janeiro.
Atualizar no próximo plantão. Não reiniciar a do laboratório sem aviso.
`,
  },
  {
    id: 'mail-cracha',
    folder: 'inbox',
    from: 'Portaria',
    fromEmail: 'portaria@lab.local',
    to: 'suporte_ti@lab.local',
    subject: 'Leitor de crachá piscando',
    received: '07/04/1988 09:03',
    unread: false,
    audience: 'guest',
    body: `O leitor da porta dupla pisca vermelho e não registra saída.
O pessoal está anotando o horário no caderno.
`,
  },
  {
    id: 'mail-papel',
    folder: 'inbox',
    from: 'Almoxarifado',
    fromEmail: 'almox@lab.local',
    to: 'suporte_ti@lab.local',
    subject: 'Papel carta — estoque baixo',
    received: '07/04/1988 15:47',
    unread: false,
    audience: 'guest',
    body: `Resma da impressora 1B acaba amanhã.
Pedido #2304 aberto. Sem previsão de toner preto.
`,
  },
  {
    id: 'mail-senha-fraca',
    folder: 'inbox',
    from: 'Carlos Menezes',
    fromEmail: 'c.menezes@lab.local',
    to: 'suporte_ti@lab.local',
    subject: 'Senha do Hélio — de novo',
    received: '18/02/1988 16:42',
    unread: false,
    audience: 'guest',
    body: `Pessoal,

O Hélio ainda não trocou a senha provisória. Dá para adivinhar: o primeiro nome com leet, arroba no meio e o ano em que a conta foi aberta.

Isso é fraco demais. Cobrem a troca antes da auditoria. Não vou escrever a senha neste e-mail.

Carlos
`,
  },
  {
    id: 'mail-energia',
    folder: 'inbox',
    from: 'Facilities',
    fromEmail: 'facilities@lab.local',
    to: 'suporte_ti@lab.local',
    subject: 'Queda breve às 02h',
    received: '08/04/1988 08:10',
    unread: false,
    audience: 'guest',
    body: `O nobreak segurou. Conferir se alguma estação subiu pedindo data.
O relógio da recepção atrasou quatro minutos.
`,
  },
  {
    id: 'mail-cert',
    folder: 'inbox',
    from: 'Certificados',
    fromEmail: 'certs@lab.local',
    to: 'suporte_ti@lab.local',
    subject: 'Certificado interno expira em 40 dias',
    received: '08/04/1988 08:00',
    unread: false,
    audience: 'guest',
    body: `monitor-estacao.lab.local — renovar antes de 20/09.
Procedimento padrão no wiki interno.
`,
  },
  {
    id: 'mail-wiki',
    folder: 'inbox',
    from: 'Monitoramento',
    fromEmail: 'noc@lab.local',
    to: 'suporte_ti@lab.local',
    subject: 'Wiki interno fora por 20 min',
    received: '08/04/1988 11:36',
    unread: true,
    audience: 'guest',
    body: `O wiki voltou sozinho às 11h20.
Ninguém reclamou de arquivo perdido. Só registro.
`,
  },
  {
    id: 'mail-cabo',
    folder: 'inbox',
    from: 'Laboratório',
    fromEmail: 'lab@lab.local',
    to: 'suporte_ti@lab.local',
    subject: 'Cabo serial da bancada 2',
    received: '08/04/1988 16:28',
    unread: false,
    audience: 'guest',
    body: `O cabo da bancada 2 não encaixa mais no adaptador.
Se tiverem um reserva no armário do TI, deixem na sala 1B.
`,
  },
  {
    id: 'mail-smtp',
    folder: 'inbox',
    from: 'Monitoramento',
    fromEmail: 'noc@lab.local',
    to: 'suporte_ti@lab.local',
    subject: 'Fila SMTP atrasada 12 min',
    received: '09/04/1988 16:02',
    unread: false,
    audience: 'guest',
    body: `Plantão,

Fila SMTP atrasou 12 minutos às 15h40.
Estação da rede 10.0.7.x respondeu.

Ticket #4412.
`,
  },
  {
    id: 'mail-spam',
    folder: 'inbox',
    from: 'Correio',
    fromEmail: 'postmaster@lab.local',
    to: 'suporte_ti@lab.local',
    subject: 'Filtro segurou 40 mensagens',
    received: '10/04/1988 06:15',
    unread: false,
    audience: 'guest',
    body: `Quase tudo era propaganda de fornecedor.
Nada encaminhado para as caixas dos pesquisadores.
`,
  },
  {
    id: 'mail-office',
    folder: 'inbox',
    from: 'Licenças',
    fromEmail: 'licencas@sindiminas.org',
    to: 'suporte_ti@lab.local',
    subject: 'Office da estação 7 — número de série',
    received: '10/04/1988 13:44',
    unread: false,
    audience: 'guest',
    body: `A cópia da estação 7 pede ativação de novo depois da formatação.
O número está no envelope do armário, gaveta 2. Não mandar por e-mail.
`,
  },
  {
    id: 'mail-toner',
    folder: 'inbox',
    from: 'Almoxarifado',
    fromEmail: 'almox@lab.local',
    to: 'suporte_ti@lab.local',
    subject: 'Pedido #2291 toner — aguardando',
    received: '11/04/1988 11:30',
    unread: false,
    audience: 'guest',
    body: `Toner preto da impressora 1B ainda sem estoque.
Previsão: quarta.
`,
  },
  {
    id: 'mail-cadeira',
    folder: 'inbox',
    from: 'Helpdesk',
    fromEmail: 'helpdesk@lab.local',
    to: 'suporte_ti@lab.local',
    subject: 'Cadeira do plantão quebrada',
    received: '11/04/1988 18:02',
    unread: true,
    audience: 'guest',
    body: `O encosto da cadeira da baia 2 soltou.
Facilities disse que só olha na quinta. Até lá, usar a da baia vazia.
`,
  },
  {
    id: 'mail-relogio',
    folder: 'inbox',
    from: 'Plantão',
    fromEmail: 'plantao@lab.local',
    to: 'suporte_ti@lab.local',
    subject: 'Relógio da estação adiantado',
    received: '12/04/1988 09:26',
    unread: false,
    audience: 'guest',
    body: `A estação do corredor está 6 minutos na frente das outras.
Não mexi. Se for o horário de verão, ignorar.
`,
  },
];
