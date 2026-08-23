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

  inputUser = {
    inputAccount: 'HookDemo',
    inputPwd: '123'
  };

  submit(para: any) {
    console.log(typeof (para));
    console.log('父login - ', para);
  }

  testOnChanges() {
    //抽換掉整個物件
    // this.inputUser = {
    //   inputAccount: '999',
    //   inputPwd: '444'
    // }
    //改同一個物件的屬性 (參考到同樣的記憶體位置)
    this.inputUser.inputAccount = '999';
    this.inputUser.inputPwd = '444';
  }
}
