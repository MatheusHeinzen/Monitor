import { RecycleFile } from '../models/recycle-file';

export const RECYCLE_FILES: RecycleFile[] = [
  {
    id: 'audio-log',
    name: 'audio_log_final_transcricao.txt',
    originalPath: 'C:\\Usuários\\dr.helio\\Documentos\\audio_log_final_transcricao.txt',
    deletedAt: '14/08/2026 22:47',
    size: '3 KB',
    type: 'Documento de Texto',
    kind: 'text',
    content: `TRANSCRIÇÃO — audio_log_final.wav
Origem: gravador de bolso / Setor B
Data aproximada: incidente

---

Se alguém estiver ouvindo isso... nós erramos. Achávamos que era só uma rocha energizada... mas ela tem fome. Ela não quer a energia das nossas pilhas, ela quer alcançar o núcleo do vulcão logo abaixo do piso do Setor B! Se ela chegar na câmara de magma pura, o calor acumulado vai...

[Som de metal rasgando e alarme altíssimo, seguido de ruído estático]

---
Fim da gravação.
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
- filtros HEPA reposição
- café industrial 5kg
- fita isolante alta temperatura

(descartado — pedido oficial foi pelo sistema)
`,
  },
];
