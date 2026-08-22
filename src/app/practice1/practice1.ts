import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-practice1',
  imports: [FormsModule],
  templateUrl: './practice1.html',
  styleUrl: './practice1.css',
})
export class Practice1 {
  myAccount = 'Anon';
  myPassword = 'SoyorinLove';
  sentAccount = '';
  sentPassword = '';
  sendInfoArr: { id: string; pwd: string }[] = [];

  mySend() {
    if (this.myAccount.length < 1 || this.myPassword.length < 1) {
      alert('輸入資訊不完整!');
      console.error('輸入資訊不完整');
      return;
    }
    let mySendObj = { id: this.myAccount, pwd: this.myPassword }
    console.log(mySendObj);
    this.sentAccount = this.myAccount;
    this.sentPassword = this.myPassword;
    this.sendInfoArr.push(mySendObj);
    console.log(this.sendInfoArr);
  }
}
