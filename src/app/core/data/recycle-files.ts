import { RecycleFile } from '../models/recycle-file';

export const RECYCLE_FILES: RecycleFile[] = [
  {
    id: 'rascunho',
    name: 'rascunho.txt',
    originalPath: 'C:\\Documents and Settings\\Usuario\\Desktop\\rascunho.txt',
    deletedAt: '12/08/2006 18:41',
    size: '1 KB',
    type: 'Documento de Texto',
    kind: 'text',
    content: `Isto ia para o relatório, mas achei melhor jogar fora.

Pontos:
- servidor Monitor fora do ar na terça
- backup da pasta compartilhada atrasado
- alguém mudou a senha do Outlook e não avisou

Apagar depois.
`,
  },
  {
    id: 'senhas',
    name: 'senhas_wifi.txt',
    originalPath: 'C:\\Documents and Settings\\Usuario\\Meus documentos\\senhas_wifi.txt',
    deletedAt: '03/09/2006 09:12',
    size: '1 KB',
    type: 'Documento de Texto',
    kind: 'text',
    content: `Rede da sala: MONITOR-ESCRITORIO
Senha: verao2006

Não deixar isso na área de trabalho.
`,
  },
  {
    id: 'relatorio',
    name: 'relatorio_anual.doc',
    originalPath: 'C:\\Documents and Settings\\Usuario\\Meus documentos\\relatorio_anual.doc',
    deletedAt: '21/09/2006 16:05',
    size: '24 KB',
    type: 'Documento do Microsoft Word',
    kind: 'document',
    content: `RELATÓRIO ANUAL — SETOR DE MONITORAMENTO

Resumo
O sistema Monitor operou com instabilidade em agosto.
Foram registradas três quedas de conexão e um atraso no envio de e-mails.

Pendências
1. Atualizar o cliente de correio para o Outlook 2007
2. Revisar os arquivos da lixeira antes da auditoria
3. Guardar as notas da reunião em notas.txt

Documento descartado. Versão final está no servidor.
`,
  },
  {
    id: 'ferias',
    name: 'ferias_2006.jpg',
    originalPath: 'C:\\Documents and Settings\\Usuario\\Meus documentos\\Minhas imagens\\ferias_2006.jpg',
    deletedAt: '02/03/2006 21:18',
    size: '186 KB',
    type: 'Imagem JPEG',
    kind: 'image',
    scene: 'beach',
  },
];
