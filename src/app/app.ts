import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from "./login/login";
import { Practice1 } from './practice1/practice1';
import { Article } from './article/article';
import { Practice082901 } from "./practice082901/practice082901";
import { SignUp } from "./sign-up/sign-up";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, Practice1, Article, Practice082901, SignUp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AnonTokyo2026Aug');
}
