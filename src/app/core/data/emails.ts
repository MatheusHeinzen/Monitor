import { MailMessage } from '../models/mail-message';

export const MAIL_MESSAGES: MailMessage[] = [
  {
    id: 'mail-rh',
    folder: 'projetos',
    from: 'RH Sindiminas',
    fromEmail: 'rh@sindiminas.org',
    to: 'h.vance@lab.local',
    subject: 'Re: Verba Poço 04 — nomenclatura nos relatórios',
    received: '10/08/2026 09:22',
    unread: true,
    audience: 'helio',
    body: `Hélio,

A verba inicial foi aprovada. Só reforçando o que já combinamos com a diretoria: nos documentos externos a unidade deve aparecer como Estação de Pesquisa Mineral e Captura de Geotermia.

Evitem termos que soem a “coleta especial” ou material vivo. Auditoria externa no mês que vem.

RH / Sindiminas
`,
  },
  {
    id: 'mail-orcamento',
    folder: 'projetos',
    from: 'Contabilidade',
    fromEmail: 'contabilidade@sindiminas.org',
    to: 'h.vance@lab.local',
    subject: 'Planilha Q3 — aproveitamento térmico',
    received: '08/08/2026 15:40',
    unread: false,
    audience: 'helio',
    body: `Dr. Vance,

Segue lembrete da planilha de custos do Poço 04 (perfuração + sensores).
Prazo interno: sexta.

Sem novidades no contrato do Projeto Vulkanos — vigência 2026.

Contabilidade
`,
  },
  {
    id: 'mail-mariana',
    folder: 'projetos',
    from: 'Dra. Mariana Dias',
    fromEmail: 'm.dias@lab.local',
    to: 'h.vance@lab.local',
    subject: 'Poço 04 / fragmento -400m — sensor estranho',
    received: '12/08/2026 17:48',
    unread: true,
    audience: 'helio',
    body: `Hélio,

Trouxemos o fragmento do -400m. Viscosidade não bate com basalto nem dacito que eu conheço.

Tentamos resfriar com N₂ no Becker e a leitura de temperatura SUBIU. Acho que o termopar está com defeito — ou a calibração do banco B. Vou isolar no setor térmico B até a gente olhar com calma.

Não manda isso pra fora ainda.

M.
`,
  },
  {
    id: 'mail-auditoria',
    folder: 'projetos',
    from: 'Auditoria Interna',
    fromEmail: 'auditoria@lab.local',
    to: 'h.vance@lab.local',
    subject: 'Classificação da amostra do Poço 04',
    received: '13/08/2026 10:05',
    unread: false,
    audience: 'helio',
    body: `Prezado,

Para o relatório trimestral, a amostra recuperada deve constar como mineral / fragmento ígneo.
Não usar categoria biológica sem laudo formal.

Qualquer dúvida, responder este fio.

Auditoria Interna
`,
  },
  {
    id: 'mail-alerta',
    folder: 'inbox',
    from: 'Alerta de Segurança',
    fromEmail: 'alerta_seguranca@lab.local',
    to: 'h.vance@lab.local',
    subject: '[SENSOR] B3 — limiares excedidos',
    received: '14/08/2026 20:41',
    unread: true,
    audience: 'helio',
    body: `Código: TH-B3-1200
Unidade: Câmara de isolamento B3

Temp. registrada: > 1.200 °C
Fluxo refrigeração: abaixo do mínimo
Sensor de peso: 45 kg → 380 kg (janela 48 h)

Ticket gerado automaticamente. Sem operador na sala no horário do pico.
`,
  },
  {
    id: 'mail-facilities',
    folder: 'inbox',
    from: 'Facilities',
    fromEmail: 'facilities@lab.local',
    to: 'h.vance@lab.local',
    subject: 'Nível 2 — turno da tarde sem retorno',
    received: '14/08/2026 19:55',
    unread: true,
    audience: 'helio',
    body: `Dr. Vance,

Equipe de manutenção reportou vazamento / vapor no corredor do Nível 2 por volta das 18h.
Três técnicos não bateram o ponto de saída. Rádio sem resposta.

Vamos manter o gerador como está até orientação de vocês. Não mexemos nas válvulas sem ordem.

Facilities
`,
  },
  {
    id: 'mail-manutencao',
    folder: 'inbox',
    from: 'Facilities',
    fromEmail: 'facilities@lab.local',
    to: 'h.vance@lab.local',
    subject: 'Agendamento: óleo gerador auxiliar',
    received: '11/08/2026 14:05',
    unread: false,
    audience: 'helio',
    body: `Confirmado: sexta, 08h–10h.
Gerador auxiliar offline só com autorização do plantão.

Facilities
`,
  },
  {
    id: 'mail-impressora',
    folder: 'inbox',
    from: 'Helpdesk',
    fromEmail: 'helpdesk@lab.local',
    to: 'h.vance@lab.local',
    subject: 'Impressora 1B — toner preto',
    received: '12/08/2026 09:11',
    unread: false,
    audience: 'helio',
    body: `Olá,

Toner preto da impressora da Sala 1B está em 8%.
Pedido #2291 aberto no almoxarifado.

Helpdesk
`,
  },
  {
    id: 'mail-reuniao',
    folder: 'inbox',
    from: 'Agenda',
    fromEmail: 'agenda@lab.local',
    to: 'h.vance@lab.local',
    subject: 'Reunião semanal cancelada',
    received: '09/08/2026 08:30',
    unread: false,
    audience: 'helio',
    body: `A reunião de terça (Poço 04 / Setor B) foi cancelada.
Próxima data: a confirmar.

Sala 1B liberada.
`,
  },
  {
    id: 'mail-ferias',
    folder: 'inbox',
    from: 'RH Sindiminas',
    fromEmail: 'rh@sindiminas.org',
    to: 'h.vance@lab.local',
    subject: 'Saldo de férias — lembrete automático',
    received: '05/08/2026 07:00',
    unread: false,
    audience: 'helio',
    body: `Lembrete: você possui 12 dias de férias acumulados.
Agendar até o fim do semestre.

RH
`,
  },
  {
    id: 'mail-enviado',
    folder: 'sent',
    from: 'Dr. Hélio Vance',
    fromEmail: 'h.vance@lab.local',
    to: 'm.dias@lab.local',
    subject: 'Re: Poço 04 / fragmento -400m',
    received: '12/08/2026 18:10',
    unread: false,
    audience: 'helio',
    body: `Mariana,

B3. Sem publicação. Olho a planilha amanhã.

H.
`,
  },
  {
    id: 'mail-rascunho',
    folder: 'deleted',
    from: 'Dr. Hélio Vance',
    fromEmail: 'h.vance@lab.local',
    to: 'm.dias@lab.local',
    subject: '(rascunho sem assunto)',
    received: '14/08/2026 21:12',
    unread: false,
    audience: 'helio',
    body: `Mariana — não mexam no incinerador ainda. Se a fonte de calor cair, o que estiver no B3 pode...
`,
  },
  {
    id: 'mail-ti-senha',
    folder: 'inbox',
    from: 'TI Corporativo',
    fromEmail: 'ti@lab.local',
    to: 'suporte_ti@lab.local',
    subject: 'Política de senhas — conta administrativa',
    received: '07/08/2026 11:16',
    unread: true,
    audience: 'guest',
    body: `Plantão,

O usuário dr.helio foi advertido de novo. Continua colocando o ano do contrato na senha da estação.

Não enviem credenciais por e-mail. Só reforçar na próxima passagem.

TI
`,
  },
  {
    id: 'mail-ti-contrato',
    folder: 'inbox',
    from: 'RH Sindiminas',
    fromEmail: 'rh@sindiminas.org',
    to: 'suporte_ti@lab.local',
    subject: 'Cópia: vigência Projeto Vulkanos',
    received: '06/08/2026 16:20',
    unread: true,
    audience: 'guest',
    body: `Para o arquivo do suporte (acesso a pastas / contas):

Projeto Vulkanos — vigência 2026
Responsável técnico: h.vance@lab.local

Anexo omitido (servidor de arquivos).

RH
`,
  },
  {
    id: 'mail-ti-servidor',
    folder: 'inbox',
    from: 'Monitoramento',
    fromEmail: 'noc@lab.local',
    to: 'suporte_ti@lab.local',
    subject: 'Fila SMTP atrasada 12 min',
    received: '13/08/2026 16:02',
    unread: true,
    audience: 'guest',
    body: `Plantão,

Fila SMTP atrasou 12 minutos às 15h40.
GeoSense e Outlook da estação do chefe na 10.0.7.x — ok.

Ticket #4412.
`,
  },
  {
    id: 'mail-ti-ssl',
    folder: 'inbox',
    from: 'Certificados',
    fromEmail: 'certs@lab.local',
    to: 'suporte_ti@lab.local',
    subject: 'Certificado interno expira em 40 dias',
    received: '11/08/2026 08:00',
    unread: false,
    audience: 'guest',
    body: `monitor-estacao.lab.local — renovar antes de 20/09.
Procedimento padrão no wiki interno.
`,
  },
  {
    id: 'mail-ti-impressora',
    folder: 'inbox',
    from: 'Almoxarifado',
    fromEmail: 'almox@lab.local',
    to: 'suporte_ti@lab.local',
    subject: 'Pedido #2291 toner — aguardando',
    received: '12/08/2026 11:30',
    unread: false,
    audience: 'guest',
    body: `Toner preto 1B ainda sem estoque. Previsão: quarta.
`,
  },
  {
    id: 'mail-ti-backup',
    folder: 'inbox',
    from: 'Backup',
    fromEmail: 'backup@lab.local',
    to: 'suporte_ti@lab.local',
    subject: 'Backup diário concluído',
    received: '14/08/2026 03:10',
    unread: false,
    audience: 'guest',
    body: `Backup noturno ok.
Pasta compartilhada parcial (alguns diretórios omitidos por ACL).
`,
  },
  {
    id: 'mail-ti-enviado',
    folder: 'sent',
    from: 'Suporte TI',
    fromEmail: 'suporte_ti@lab.local',
    to: 'ti@lab.local',
    subject: 'Re: Política de senhas',
    received: '07/08/2026 11:40',
    unread: false,
    audience: 'guest',
    body: `Ok. Deixei um checklist na área do visitante e uma nota sobre o padrão de digitação dele.
Não colo a senha montada em lugar nenhum.
`,
  },
  {
    id: 'mail-both-welcome',
    folder: 'deleted',
    from: 'Sistema',
    fromEmail: 'sistema@lab.local',
    to: 'todos@lab.local',
    subject: 'Teste de entrega — pode apagar',
    received: '01/08/2026 09:00',
    unread: false,
    audience: 'both',
    body: `Mensagem de teste do servidor de correio local.
`,
  },
];
