import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from "./login/login";
import { Practice1 } from './practice1/practice1';
import { Article } from './article/article';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, Practice1, Article],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AnonTokyo2026Aug');
}
