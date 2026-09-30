import { MailMessage } from '../models/mail-message';

export const MAIL_MESSAGES: MailMessage[] = [
  {
    id: 'mail-rh',
    folder: 'projetos',
    from: 'RH Sindiminas',
    fromEmail: 'rh@sindiminas.org',
    to: 'h.vance@lab.local',
    subject: 'Re: Verba para perfuração profunda – Poço 04',
    received: '10/08/2026 09:22',
    unread: true,
    audience: 'helio',
    body: `Hélio,

A diretoria aprovou o investimento inicial para o aproveitamento geotérmico do setor. Porém, reforçamos: a atividade oficial deste laboratório deve constar como Estação de Pesquisa Mineral e Captura de Geotermia. Nada sobre coleta de amostras vivas deve constar nos relatórios públicos.

Atenciosamente,
Departamento de RH / Sindiminas
`,
  },
  {
    id: 'mail-mariana',
    folder: 'projetos',
    from: 'Dra. Mariana Dias',
    fromEmail: 'm.dias@lab.local',
    to: 'h.vance@lab.local',
    subject: 'Amostra do Nível -400m (Leitura anômala)',
    received: '12/08/2026 17:48',
    unread: true,
    audience: 'helio',
    body: `Hélio,

A sonda recuperou o fragmento magmático do Poço 04. Não é rocha derretida comum. A viscosidade e a emissão de calor não batem com basalto ou dacito. Quando jogamos nitrogênio líquido para resfriar no Becker, a temperatura subiu em vez de cair. Parecia estar... reagindo defensivamente.

Precisamos isolar a amostra no setor térmico B.

Mariana
`,
  },
  {
    id: 'mail-alerta',
    folder: 'inbox',
    from: 'Alerta de Segurança',
    fromEmail: 'alerta_seguranca@lab.local',
    to: 'h.vance@lab.local',
    subject: '[ALERTA DE TEMPERATURA] Setor B3 - Câmara de Isolamento',
    received: '14/08/2026 20:41',
    unread: true,
    audience: 'helio',
    body: `Leitura de temperatura acima dos 1.200°C na câmara B3.
Falha nas bombas de água de refrigeração.
Variação de massa detectada no sensor de peso: de 45kg para 380kg em 48 horas.

Recomenda-se evacuação de emergência.

— Sistema automático de monitoramento
`,
  },
  {
    id: 'mail-manutencao',
    folder: 'inbox',
    from: 'Facilities',
    fromEmail: 'facilities@lab.local',
    to: 'h.vance@lab.local',
    subject: 'Agendamento: troca de óleo gerador auxiliar',
    received: '11/08/2026 14:05',
    unread: false,
    audience: 'helio',
    body: `Dr. Vance,

Confirmamos a janela de manutenção do gerador auxiliar para sexta, 08h–10h.
Levem o gerador offline apenas com autorização do plantão.

Facilities / Vulkanos
`,
  },
  {
    id: 'mail-reuniao',
    folder: 'inbox',
    from: 'Agenda',
    fromEmail: 'agenda@lab.local',
    to: 'h.vance@lab.local',
    subject: 'Reunião semanal — captura geotérmica',
    received: '09/08/2026 08:30',
    unread: false,
    audience: 'helio',
    body: `Lembrete automático

Assunto: Acompanhamento Poço 04 / Setor B
Horário: terça, 10h
Sala: Nível 1 — Sala 1B

Leve o diário de sondagem atualizado.
`,
  },
  {
    id: 'mail-enviado',
    folder: 'sent',
    from: 'Dr. Hélio Vance',
    fromEmail: 'h.vance@lab.local',
    to: 'm.dias@lab.local',
    subject: 'Re: Amostra do Nível -400m',
    received: '12/08/2026 18:10',
    unread: false,
    audience: 'helio',
    body: `Mariana,

Isole no B3 e não publique nada ainda. Vou revisar a análise orgânica amanhã.

Hélio
`,
  },
  {
    id: 'mail-rascunho',
    folder: 'deleted',
    from: 'Dr. Hélio Vance',
    fromEmail: 'h.vance@lab.local',
    to: 'm.dias@lab.local',
    subject: '(rascunho) Não desligue o incinerador',
    received: '14/08/2026 21:12',
    unread: false,
    audience: 'helio',
    body: `Mariana, não desligue o incinerador! O que quer que esteja dentro da rocha está se alimentando do calor do gerador geotérmico. Se cortarmos a energia, ela vai descer direto para a fenda magmática do vulcão e...
`,
  },
  {
    id: 'mail-ti-senha',
    folder: 'inbox',
    from: 'TI Corporativo',
    fromEmail: 'ti@lab.local',
    to: 'suporte_ti@lab.local',
    subject: 'Atenção: política de senhas — conta dr.helio',
    received: '07/08/2026 11:16',
    unread: true,
    audience: 'guest',
    body: `Equipe de suporte,

O Dr. Hélio foi novamente advertido por usar o ano do projeto no login da estação.

Lembrete da política: misturar letras e números. Exemplo de padrão que ele insiste em repetir: inicial + nome abreviado + @ + ano do projeto (2026).

Não compartilhar credenciais por e-mail. Este aviso é só para o plantão.

TI / Lab.local
`,
  },
  {
    id: 'mail-ti-servidor',
    folder: 'inbox',
    from: 'Monitoramento',
    fromEmail: 'noc@lab.local',
    to: 'suporte_ti@lab.local',
    subject: 'Servidor de e-mail local — fila atrasada',
    received: '13/08/2026 16:02',
    unread: true,
    audience: 'guest',
    body: `Plantão,

A fila SMTP do servidor local atrasou 12 minutos hoje às 15h40.
GeoSense e Outlook da estação do Chefe de Pesquisa continuam na rede 10.0.7.x.

Sem ação urgente — registrar no ticket #4412.
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
    body: `Backup noturno da pasta compartilhada concluído com sucesso.

Volumes: Documentos (parcial — Sigilosos omitido por ACL), GeoSense logs, caixa de correio geral.
`,
  },
  {
    id: 'mail-ti-enviado',
    folder: 'sent',
    from: 'Suporte TI',
    fromEmail: 'suporte_ti@lab.local',
    to: 'ti@lab.local',
    subject: 'Re: política de senhas — conta dr.helio',
    received: '07/08/2026 11:40',
    unread: false,
    audience: 'guest',
    body: `Recebido. Vou reforçar no próximo plantão e deixar uma nota de backup na área de trabalho do visitante.
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
    body: `Mensagem de teste do servidor de correio local. Pode excluir.
`,
  },
];
