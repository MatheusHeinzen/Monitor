import { RecycleFile } from '../models/recycle-file';

export const RECYCLE_FILES: RecycleFile[] = [
  {
    id: 'audio-log',
    name: 'gravacao_14ago_corte.txt',
    originalPath: 'C:\\Usuários\\dr.helio\\Documentos\\gravacao_14ago_corte.txt',
    deletedAt: '14/08/2026 22:47',
    size: '2 KB',
    type: 'Documento de Texto',
    kind: 'text',
    content: `Arquivo: gravacao_14ago.wav (trecho)
Origem: gravador de bolso
Qualidade: ruim

---

...alguém aí? o piso do B está—
[estática]
não é só a rocha, ela—
[alarme / metal]
está embaixo, se chegar no—
[corte]

---
fim do arquivo
`,
  },
  {
    id: 'lista-antiga',
    name: 'lista_almoxarifado.txt',
    originalPath: 'C:\\Usuários\\dr.helio\\Documentos\\Pessoal\\lista_almoxarifado.txt',
    deletedAt: '02/08/2026 11:08',
    size: '1 KB',
    type: 'Documento de Texto',
    kind: 'text',
    content: `Pedido almoxarifado — rascunho

- luvas térmicas (par)
- filtros HEPA
- café industrial 5kg
- fita isolante alta temperatura

(pedido oficial foi pelo sistema)
`,
  },
  {
    id: 'rascunho-email',
    name: 'rascunho_email_cortado.txt',
    originalPath: 'C:\\Usuários\\dr.helio\\Desktop\\rascunho_email_cortado.txt',
    deletedAt: '14/08/2026 21:15',
    size: '1 KB',
    type: 'Documento de Texto',
    kind: 'text',
    content: `colei aqui pra não perder — apagar depois

"...está se alimentando do calor do gerador. Se cortarmos..."

(resto no rascunho do Outlook)
`,
  },
];
