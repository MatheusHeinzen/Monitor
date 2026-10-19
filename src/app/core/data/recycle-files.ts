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
    id: 'placa-entrada',
    name: 'placa_entrada.jpg',
    originalPath: 'C:\\Usuários\\helio\\placa_entrada.jpg',
    deletedAt: '04/08/1988 09:14',
    size: '186 KB',
    type: 'Imagem JPEG',
    kind: 'image',
    scene: 'placa',
    requiredRole: 'helio',
  },
];
