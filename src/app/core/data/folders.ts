import { FolderDefinition } from '../models/folder-item';

export const FOLDERS: FolderDefinition[] = [
  {
    id: 'docs',
    title: 'Documentos',
    path: 'C:\\Documents and Settings\\Usuario\\Desktop\\Documentos',
    icon: 'folder',
    entries: [
      {
        id: 'agenda',
        name: 'agenda.txt',
        size: '1 KB',
        type: 'Documento de Texto',
        modified: '25/09/2006 10:22',
        kind: 'text',
        content: `Agenda da semana

Segunda - conferir Outlook
Quarta - backup da pasta compartilhada
Sexta - reunião com a TI

Obs: o arquivo confidencial ficou no ZIP da área de trabalho.
`,
      },
      {
        id: 'procedimentos',
        name: 'procedimentos.doc',
        size: '18 KB',
        type: 'Documento do Microsoft Word',
        modified: '18/09/2006 15:40',
        kind: 'document',
        content: `PROCEDIMENTOS — ESTAÇÃO MONITOR

1. Abrir o GeoSense e conferir as leituras
2. Verificar a caixa de entrada
3. Não apagar arquivos da lixeira sem revisar

Arquivos sensíveis devem ir para um ZIP com senha.
`,
      },
    ],
  },
  {
    id: 'backup-zip',
    title: 'backup.zip',
    path: 'C:\\Documents and Settings\\Usuario\\Desktop\\backup.zip',
    icon: 'zip',
    password: 'verao2006',
    entries: [
      {
        id: 'acesso',
        name: 'acesso_remoto.txt',
        size: '1 KB',
        type: 'Documento de Texto',
        modified: '20/09/2006 22:08',
        kind: 'text',
        content: `Acesso remoto — uso interno

Host: monitor-vulcao.local
Usuário: operador
Senha: GeoSense#14

Não enviar por e-mail sem criptografia.
`,
      },
      {
        id: 'checklist',
        name: 'checklist_auditoria.doc',
        size: '12 KB',
        type: 'Documento do Microsoft Word',
        modified: '22/09/2006 09:55',
        kind: 'document',
        content: `CHECKLIST DE AUDITORIA

[ ] Backup da pasta Documentos
[ ] Revisar senhas_wifi.txt na lixeira
[ ] Confirmar que backup.zip está protegido
[ ] Atualizar o cliente Outlook

Última revisão: setembro/2006
`,
      },
    ],
  },
];

export function getFolder(id: string): FolderDefinition | undefined {
  return FOLDERS.find((folder) => folder.id === id);
}
