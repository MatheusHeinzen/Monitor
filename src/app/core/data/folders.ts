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
        modified: '12/08/1988 09:10',
        kind: 'folder',
        childFolderId: 'pesquisa',
      },
      {
        id: 'pessoal',
        name: 'Pessoal',
        size: '',
        type: 'Pasta de arquivos',
        modified: '05/08/1988 18:22',
        kind: 'folder',
        childFolderId: 'pessoal',
      },
      {
        id: 'sigilosos',
        name: 'Sigilosos',
        size: '',
        type: 'Pasta de arquivos',
        modified: '14/08/1988 21:05',
        kind: 'folder',
        childFolderId: 'sigilosos',
        requiredRole: 'helio',
      },
      {
        id: 'horarios',
        name: 'horarios_turno.txt',
        size: '1 KB',
        type: 'Documento de Texto',
        modified: '01/08/1988 08:00',
        kind: 'text',
        content: `Turnos — Estação Monitor

Manhã  06:00–14:00
Tarde  14:00–22:00
Noite  22:00–06:00

Plantão Facilities: rádio canal 3
`,
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
        modified: '12/08/1988 16:40',
        kind: 'folder',
        childFolderId: 'relatorios',
      },
      {
        id: 'ata-orcamento',
        name: 'ata_reuniao_orcamento.doc',
        size: '14 KB',
        type: 'Documento do Microsoft Word',
        modified: '04/08/1988 11:20',
        kind: 'document',
        content: `ATA — Reunião de orçamento Q3
Presentes: Contabilidade, RH, Chefe de Pesquisa

1. Aprovação parcial da verba do Poço 04
2. Pedido de redução em “materiais especiais” — indeferido
3. Próxima reunião: após entrega da planilha térmica

Sem outros assuntos.
`,
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
        id: 'relatorio-oficial',
        name: 'Producao_Termica_Semanal.doc',
        size: '22 KB',
        type: 'Documento do Microsoft Word',
        modified: '11/08/1988 17:00',
        kind: 'document',
        content: `RELATÓRIO SEMANAL — PRODUÇÃO TÉRMICA
Estação Monitor · Poço 04
Período: 04–10/08/1988

Resumo
- Extração térmica dentro da faixa contratada
- Disponibilidade de sensores: 98,2%
- Incidentes de segurança: nenhum registrado no período

Observação para diretoria: operação estável. Sem necessidade de visita externa.
`,
      },
      {
        id: 'diario',
        name: 'Diario_Sondagem_1988_08_12.doc',
        size: '28 KB',
        type: 'Documento do Microsoft Word',
        modified: '12/08/1988 16:40',
        kind: 'document',
        content: `DIÁRIO DE SONDAGEM — Poço 04
Data: 12/08/1988
Operador: equipe de perfuração

Objetivo do dia: avançar a coluna e recuperar material do intervalo -380 / -400 m para análise de condutividade.

Notas de campo:
- Temperatura de fundo ~200 °C (baseline esperado)
- Formação ígnea dormente abaixo da crosta — risco residual de acionar o conduto se a perfuração for agressiva demais
- Amostras encaminhadas ao Setor B

Assinatura: H. Vance
`,
      },
      {
        id: 'analise-v',
        name: 'Analise_Organica_Amostra_V.doc',
        size: '42 KB',
        type: 'Documento do Microsoft Word',
        modified: '13/08/1988 11:18',
        kind: 'document',
        content: `LAUDO INTERNO — Amostra V (Poço 04)
Setor B · rascunho de bancada

Tabela de resultados:
| Parâmetro              | Resultado                          |
|------------------------|------------------------------------|
| DNA (base C)           | não detectado                      |
| Matriz                 | silicato vítreo em rede            |
| Assinatura energética  | residual tipo plasma / íon térmico |
| Impacto mecânico       | energia dissipada → calor          |
| Ensaio N₂ líquido      | ΔT positivo (inesperado)           |

Comentário (rascunho, apagar antes de protocolar):
se não é mineral estável, o que...

[fim do arquivo — salvamento interrompido]
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
        modified: '08/08/1988 19:04',
        kind: 'text',
        content: `Compras

- Café
- Filtro de ar
- Pilhas AA
- Creme para queimadura
- Leite em pó
`,
      },
      {
        id: 'placa',
        name: 'placa_entrada.jpg',
        size: '248 KB',
        type: 'Imagem JPEG',
        modified: '03/08/1988 12:15',
        kind: 'image',
        scene: 'placa',
      },
      {
        id: 'recibo-cafe',
        name: 'recibo_cafe.txt',
        size: '1 KB',
        type: 'Documento de Texto',
        modified: '02/08/1988 07:40',
        kind: 'text',
        content: `Cantina Nível 1
Café + pão — R$ 8,50
02/08/1988
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
        id: 'memo',
        name: 'memo_interno_1418.doc',
        size: '16 KB',
        type: 'Documento do Microsoft Word',
        modified: '14/08/1988 20:58',
        kind: 'document',
        content: `MEMO INTERNO 1418
Distribuição: plantão / diretoria
Classificação: restrito

Checklist operacional (Nível 2):
[ ] Não desligar o gerador sem autorização do Chefe de Pesquisa
[ ] Extintor industrial CO₂ — armário 03
[ ] Silo de N₂ reserva — acesso manual, sala técnica
[ ] Corredor B: acesso limitado até nova ordem

Referência sensores: ver ticket TH-B3-1200 no sistema.
`,
      },
      {
        id: 'amostra-nota',
        name: 'rascunho_caderno.txt',
        size: '1 KB',
        type: 'Documento de Texto',
        modified: '13/08/1988 22:11',
        kind: 'text',
        content: `caderno — página rasgada

não está morta
se a temperatura cair...
não protocolar isso
`,
      },
    ],
  },
];

export function getFolder(id: string): FolderDefinition | undefined {
  return FOLDERS.find((folder) => folder.id === id);
}
