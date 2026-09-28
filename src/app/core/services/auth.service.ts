import { Injectable, signal } from '@angular/core';
import { LOGIN_CREDENTIALS } from '../data/auth';

@Injectable({ providedIn: 'root' })
export class AuthService {
  readonly isLoggedIn = signal(false);

  login(username: string, password: string): boolean {
    const valid =
      username === LOGIN_CREDENTIALS.username && password === LOGIN_CREDENTIALS.password;

    if (valid) {
      this.isLoggedIn.set(true);
    }

    return valid;
  }
}
