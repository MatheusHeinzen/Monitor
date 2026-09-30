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
    username: 'dr.helio',
    displayName: 'Dr. Hélio Vance',
    role: 'helio',
    passwords: ['vulkanos1988', 'H3l1o@2026'],
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

export const LOGIN_POSTIT = 'HV: vulkanos + ???';
