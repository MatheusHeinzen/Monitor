import { FolderDefinition } from '../models/folder-item';

export const FOLDERS: FolderDefinition[] = [
  {
    id: 'docs',
    title: 'Documentos',
    path: 'C:\\Usuários\\dr.helio\\Documentos',
    icon: 'folder',
    entries: [
      {
        id: 'pesquisa',
        name: 'Pesquisa',
        size: '',
        type: 'Pasta de arquivos',
        modified: '12/08/2026 09:10',
        kind: 'folder',
        childFolderId: 'pesquisa',
      },
      {
        id: 'pessoal',
        name: 'Pessoal',
        size: '',
        type: 'Pasta de arquivos',
        modified: '05/08/2026 18:22',
        kind: 'folder',
        childFolderId: 'pessoal',
      },
      {
        id: 'sigilosos',
        name: 'Sigilosos',
        size: '',
        type: 'Pasta de arquivos',
        modified: '14/08/2026 21:05',
        kind: 'folder',
        childFolderId: 'sigilosos',
        requiredRole: 'helio',
      },
    ],
  },
  {
    id: 'pesquisa',
    title: 'Pesquisa',
    path: 'C:\\Usuários\\dr.helio\\Documentos\\Pesquisa',
    icon: 'folder',
    parentId: 'docs',
    entries: [
      {
        id: 'relatorios',
        name: 'Relatorios_Diarios',
        size: '',
        type: 'Pasta de arquivos',
        modified: '12/08/2026 16:40',
        kind: 'folder',
        childFolderId: 'relatorios',
      },
    ],
  },
  {
    id: 'relatorios',
    title: 'Relatorios_Diarios',
    path: 'C:\\Usuários\\dr.helio\\Documentos\\Pesquisa\\Relatorios_Diarios',
    icon: 'folder',
    parentId: 'pesquisa',
    entries: [
      {
        id: 'diario',
        name: 'Diario_Sondagem_2026_08_12.doc',
        size: '28 KB',
        type: 'Documento do Microsoft Word',
        modified: '12/08/2026 16:40',
        kind: 'document',
        content: `DIÁRIO DE SONDAGEM — Poço 04
Data: 12/08/2026
Operador: equipe de perfuração / Dr. Hélio Vance

Iniciamos a extração na câmara magmática inativa abaixo da crosta. O objetivo primário é capturar energia térmica de alta densidade sem acionar o duto vulcânico dormente.

Observações:
- Profundidade nominal: -400 m
- Temperatura de fundo estável em torno de 200 °C (baseline geotérmico)
- Reforço da fachada oficial: Estação de Pesquisa Mineral e Captura de Geotermia

Próximo passo: recuperação de fragmento do Nível -400 m para análise no Setor B.
`,
      },
      {
        id: 'analise-v',
        name: 'Analise_Organica_Amostra_V.doc',
        size: '42 KB',
        type: 'Documento do Microsoft Word',
        modified: '13/08/2026 11:18',
        kind: 'document',
        content: `RELATÓRIO TÉCNICO — Análise Orgânica / Amostra V
Setor Térmico B · Confidencial

Tabela resumida:
| Parâmetro              | Resultado                                      |
|------------------------|------------------------------------------------|
| DNA baseado em carbono | Não detectado                                  |
| Matriz estrutural      | Rede de silicato vítreo                        |
| Carga energética       | Plasma magmático residual                      |
| Resposta a impacto     | Absorção cinética → conversão em calor         |
| Resposta a N₂ líquido  | Elevação de temperatura (reação defensiva)     |

Nota do cientista:
"Não é um mineral. É um organismo plasmônico-magmático. Ele absorve impacto cinético e converte em calor."

Implicação operacional: dano físico convencional pode aquecer a amostra em vez de neutralizá-la.
Isolamento recomendado no setor térmico B. Não interromper o incinerador/fonte térmica sem protocolo.
`,
      },
    ],
  },
  {
    id: 'pessoal',
    title: 'Pessoal',
    path: 'C:\\Usuários\\dr.helio\\Documentos\\Pessoal',
    icon: 'folder',
    parentId: 'docs',
    entries: [
      {
        id: 'compras',
        name: 'compras_mercado.txt',
        size: '1 KB',
        type: 'Documento de Texto',
        modified: '08/08/2026 19:04',
        kind: 'text',
        content: `Compras / reposição do lab

- Café (pacote grande)
- Filtro de ar
- Pilhas AA
- Creme para queimadura
- Leite em pó (sala de reunião)
`,
      },
    ],
  },
  {
    id: 'sigilosos',
    title: 'Sigilosos',
    path: 'C:\\Usuários\\dr.helio\\Documentos\\Sigilosos',
    icon: 'folder',
    parentId: 'docs',
    requiredRole: 'helio',
    entries: [
      {
        id: 'evacuacao',
        name: 'ORDEM_EVACUACAO_B3.doc',
        size: '16 KB',
        type: 'Documento do Microsoft Word',
        modified: '14/08/2026 20:58',
        kind: 'document',
        content: `ORDEM INTERNA — EVACUAÇÃO SETOR B3
Classificação: SIGILOSO

Motivo: variação de massa na câmara de isolamento (45 kg → 380 kg / 48 h) e falha das bombas de refrigeração.

Ações:
1. Evacuar Nível 2 (laboratórios) e Nível 1 (escritórios).
2. Não cortar o gerador geotérmico sem autorização do Chefe de Pesquisa.
3. Extintor industrial de CO₂ permanece no armário 03 do Nível 2.
4. Silo de reserva de nitrogênio: acesso manual na sala técnica (Nível 2).

Distribuição: diretoria / plantão de segurança.
`,
      },
      {
        id: 'amostra-nota',
        name: 'nota_amostra_v.txt',
        size: '1 KB',
        type: 'Documento de Texto',
        modified: '13/08/2026 22:11',
        kind: 'text',
        content: `Amostra V — notas privadas

Ela não está "morta" dentro da rocha.
Parece se alimentar do calor do gerador.
Se descer até a fenda magmática... não quero pensar nisso.

Manter isolamento. Não publicar.
`,
      },
    ],
  },
];

export function getFolder(id: string): FolderDefinition | undefined {
  return FOLDERS.find((folder) => folder.id === id);
}
