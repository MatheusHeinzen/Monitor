import { FolderDefinition } from '../models/folder-item';

export const FOLDERS: FolderDefinition[] = [
  {
    id: 'avisos',
    title: 'Avisos_E_Diretrizes',
    path: 'C:\\Usuários\\helio\\Avisos_E_Diretrizes',
    icon: 'folder',
    requiredRole: 'helio',
    entries: [
      {
        id: 'cobranca-p',
        name: 'cobranca_senhor_p.doc',
        size: '12 KB',
        type: 'Documento do Microsoft Word',
        modified: '11/04/1988 19:40',
        kind: 'document',
        content: `De: Senhor P.
Para: Hélio
Data: 11/04/1988

Hélio, o investimento de 1956 até aqui não foi para gerarmos faíscas. O canal de geotermia profunda precisa produzir 500% a mais até sexta-feira. Se os sensores aquecerem, ignore os alertas e force a bomba de sucção magmática.

Quero o número na sexta. Não me traga desculpa de segurança.

Senhor P.
`,
      },
      {
        id: 'rascunho-helio',
        name: 'rascunho_nao_enviado.txt',
        size: '2 KB',
        type: 'Documento de Texto',
        modified: '12/04/1988 23:18',
        kind: 'text',
        content: `
O Senhor P. grita como se o poço fosse uma torneira. A equipe está no limite. Ontem o turno trocou o selo errado e ninguém teve coragem de registrar. Eu também deixei passar um alerta de temperatura porque ele estava na sala.

Não é falta de cuidado. É medo de abrir a boca.
`,
      },
    ],
  },
  {
    id: 'registros',
    title: 'Registros_Geotermicos',
    path: 'C:\\Usuários\\helio\\Registros_Geotermicos',
    icon: 'folder',
    requiredRole: 'helio',
    entries: [
      {
        id: 'pressao',
        name: 'pressao_e_calibragem.doc',
        size: '18 KB',
        type: 'Documento do Microsoft Word',
        modified: '15/04/1988 18:05',
        kind: 'document',
        content: `REGISTRO DE PRESSÃO E CALIBRAGEM
Canal de geotermia profunda — duto central

12/04/1988   320 °C    Fluxo estável.
14/04/1988   890 °C    Aumento repentino. O fluido injetado não está agindo como lava comum. Alta viscosidade e pulsação.
15/04/1988   1400 °C   O Senhor P. ordenou fechar as válvulas de escape de emergência. A energia disparou 400%. Ouvimos barulhos dentro dos dutos de transferência.

Bomba de sucção magmática: forçada, conforme a ordem de 11/04.
`,
      },
    ],
  },
  {
    id: 'logs',
    title: 'Logs_De_Emergencia',
    path: 'C:\\Usuários\\helio\\Logs_De_Emergencia',
    icon: 'folder',
    requiredRole: 'helio',
    entries: [
      {
        id: 'log-001',
        name: 'log_001.txt',
        size: '1 KB',
        type: 'Documento de Texto',
        modified: '15/04/1988 21:06',
        kind: 'text',
        content: `LOG 001
15/04/1988 21:06
gravação apressada

Não era uma veia geológica comum. O que extraímos do duto não é apenas magma. Tem estrutura orgânica. A energia que medimos é o metabolismo disso.
`,
      },
      {
        id: 'log-002',
        name: 'log_002.txt',
        size: '1 KB',
        type: 'Documento de Texto',
        modified: '15/04/1988 21:19',
        kind: 'text',
        content: `LOG 002
15/04/1988 21:19

A pressão rompeu a contenção da Sala B. O calor derreteu a liga de titânio do duto. O Senhor P. tentou selar a porta de segurança por fora e trancou a equipe da segurança lá dentro.
`,
      },
    ],
  },
];

export function getFolder(id: string): FolderDefinition | undefined {
  return FOLDERS.find((folder) => folder.id === id);
}
