import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LOGIN_CREDENTIALS, LOGIN_FOOTER, LOGIN_HINT } from '../core/data/auth';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private readonly auth = inject(AuthService);

  password = '';
  readonly displayName = LOGIN_CREDENTIALS.username;
  readonly hint = LOGIN_HINT;
  readonly footer = LOGIN_FOOTER;
  readonly showHint = signal(false);

  submit(): void {
    const ok = this.auth.login(this.displayName, this.password);
    if (!ok) {
      this.showHint.set(true);
    }
  }

  revealHint(): void {
    this.showHint.set(true);
  }
}
