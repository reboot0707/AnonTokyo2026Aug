import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  title: string = '登入畫面'
  role = 'admin'
  accountPlaceHolder = '請輸入 go 帳號'; // camelCase
  passwordPlaceHolder = '輸入通關密語...';
  account = 'Ann'
  password = ''

  myTest(para: PointerEvent) {
    let a = confirm('Hello?');
    console.log(a);
    if (a) {
      this.title = "登入中..."
      console.log(`\{ id: ${this.account}, pwd: ${this.password} \}`);
    } else {
      this.title = '登入畫面'
    }
    // console.log(para);
  }
}
