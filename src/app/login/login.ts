import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  title: string = '登入'
  role = 'admin'

  myTest() {
    this.title += " Anon Tokyo"
  }
}
