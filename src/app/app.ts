import { Component } from '@angular/core';
import { Desktop } from './desktop/desktop';

@Component({
  imports: [Desktop],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {}
