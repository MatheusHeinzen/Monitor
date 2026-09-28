import { DesktopItem } from '../models/desktop-item';

export const DESKTOP_ITEMS: DesktopItem[] = [
  {
    id: 'recycle',
    label: 'Lixeira',
    icon: 'recycle',
    appId: 'recycle',
    windowTitle: 'Lixeira',
    width: 620,
    height: 430,
  },
  {
    id: 'outlook',
    label: 'Outlook 2007',
    icon: 'outlook',
    appId: 'outlook',
    windowTitle: 'Caixa de Entrada - Microsoft Outlook',
    width: 820,
    height: 540,
  },
  {
    id: 'notepad',
    label: 'notas.txt',
    icon: 'notepad',
    appId: 'notepad',
    windowTitle: 'notas.txt - Bloco de notas',
    width: 520,
    height: 380,
  },
];
