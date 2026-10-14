export type UserRole = 'helio' | 'guest';

export interface AuthAccount {
  id: string;
  username: string;
  displayName: string;
  role: UserRole;
  passwords?: readonly string[];
  subtitle: string;
}

export const AUTH_ACCOUNTS: AuthAccount[] = [
  {
    id: 'helio',
    username: 'helio',
    displayName: 'Dr. Hélio Vance',
    role: 'helio',
    passwords: ['H3l10@1988'],
    subtitle: 'Chefe de Pesquisa',
  },
  {
    id: 'guest',
    username: 'visitante',
    displayName: 'visitante',
    role: 'guest',
    subtitle: 'Suporte TI',
  },
];

export const LOGIN_FOOTER = 'Estação Monitor · rede local 10.0.7.x';
