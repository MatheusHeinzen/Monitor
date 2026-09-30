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

export const LOGIN_FOOTER =
  'Laboratório Vulkanos — Estação de Pesquisa Mineral e Captura de Geotermia';

export const LOGIN_POSTIT =
  "A senha do Dr. Hélio é a data do primeiro surto geotérmico (DD/MM/AAAA) com a palavra 'vulkanos' na frente.";
