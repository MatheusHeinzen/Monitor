import { Component, inject } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { Desktop } from './desktop/desktop';
import { Login } from './login/login';

@Component({
  imports: [Desktop, Login],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  readonly auth = inject(AuthService);
}
