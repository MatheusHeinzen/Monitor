import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AUTH_ACCOUNTS, AuthAccount, LOGIN_FOOTER, LOGIN_POSTIT } from '../core/data/auth';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private readonly auth = inject(AuthService);

  readonly accounts = AUTH_ACCOUNTS;
  readonly footer = LOGIN_FOOTER;
  readonly postit = LOGIN_POSTIT;
  readonly selected = signal<AuthAccount | null>(null);
  readonly showError = signal(false);
  password = '';

  selectAccount(account: AuthAccount): void {
    this.showError.set(false);
    this.password = '';

    if (!account.passwords?.length) {
      this.auth.login(account.id);
      return;
    }

    this.selected.set(account);
  }

  clearSelection(): void {
    this.selected.set(null);
    this.password = '';
    this.showError.set(false);
  }

  submit(): void {
    const account = this.selected();
    if (!account) {
      return;
    }

    const ok = this.auth.login(account.id, this.password);
    if (!ok) {
      this.showError.set(true);
    }
  }
}
