import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShareInput } from "../share-input/share-input";

@Component({
  selector: 'app-login',
  imports: [FormsModule, ShareInput],
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

  submit(para: any) {
    console.log(typeof (para));
    console.log('父login - ', para);
  }
}
