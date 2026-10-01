import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-internet-explorer',
  imports: [FormsModule],
  templateUrl: './internet-explorer.html',
  styleUrl: './internet-explorer.scss',
})
export class InternetExplorerApp {
  readonly address = signal('about:blank');
  readonly showError = signal(true);

  goHome(): void {
    this.address.set('about:blank');
    this.showError.set(true);
  }

  refresh(): void {
    this.showError.set(true);
  }

  navigate(): void {
    const value = this.address().trim();
    if (!value) {
      this.address.set('about:blank');
    }
    this.showError.set(true);
  }

  stop(): void {
    this.showError.set(true);
  }
}
