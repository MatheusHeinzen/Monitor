import { Injectable, computed, inject, signal } from '@angular/core';
import { AUTH_ACCOUNTS, AuthAccount } from '../data/auth';
import { WindowManagerService } from './window-manager.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly wm = inject(WindowManagerService);
  private readonly user = signal<AuthAccount | null>(null);

  readonly currentUser = this.user.asReadonly();
  readonly isLoggedIn = computed(() => this.user() !== null);

  login(accountId: string, password = ''): boolean {
    const account = AUTH_ACCOUNTS.find((item) => item.id === accountId);
    if (!account) {
      return false;
    }

    if (!account.passwords?.length) {
      this.user.set(account);
      return true;
    }

    const valid = account.passwords.includes(password);
    if (valid) {
      this.user.set(account);
    }
    return valid;
  }

  logout(): void {
    this.wm.closeAll();
    this.user.set(null);
  }
}
