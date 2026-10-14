import { RecycleFile } from '../models/recycle-file';

export const RECYCLE_FILES: RecycleFile[] = [
  {
    id: 'lista-antiga',
    name: 'lista_almoxarifado.txt',
    originalPath: 'C:\\Usuários\\helio\\lista_almoxarifado.txt',
    deletedAt: '02/04/1988 11:08',
    size: '1 KB',
    type: 'Documento de Texto',
    kind: 'text',
    content: `Pedido almoxarifado — rascunho

- luvas térmicas (par)
- filtros
- café industrial 5kg
- fita isolante alta temperatura

(pedido oficial foi pelo sistema)
`,
  },
  {
    id: 'duto-bak',
    name: 'duto_central.bak',
    originalPath: 'C:\\Usuários\\helio\\Logs_De_Emergencia\\log_final.txt',
    deletedAt: '15/04/1988 21:27',
    size: '2 KB',
    type: 'Cópia de segurança',
    kind: 'text',
    requiredRole: 'helio',
    triggersAlarm: true,
    content: `LOG FINAL
15/04/1988 21:27
cópia recuperada

Ele está subindo pelos tubos de ventilação. Se alguém encontrar este terminal, desative a bomba do duto central na sala dos geradores ou o sistema continuará alimentando ele. O código de confirmação está num papel colado por dentro da porta do armário.
`,
  },
];
