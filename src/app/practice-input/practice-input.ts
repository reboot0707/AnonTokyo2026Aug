import { Component, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-practice-input',
  imports: [FormsModule],
  templateUrl: './practice-input.html',
  styleUrl: './practice-input.css',
})
export class PracticeInput {
  @Input() user_son = {
    account: "",
    password: ""
  };

  /** 顯示使用者資料 */
  @Input() showUser_son = {
    account: "",
    password: ""
  };

  /** 顯示使用者資料清單 */
  @Input() showUserList_son:
    {
      account: string,
      password: string
    }[] = [];

  /** 送出 */
  submit_son() {
    if (!(this.user_son.account && this.user_son.password)) {
      alert('必須輸入完整');
      return;
    }

    this.showUser_son.account = this.user_son.account;
    this.showUser_son.password = this.user_son.password;

    if (this.showUserList_son.findIndex(x => x.account === this.showUser_son.account) != -1) {
      // this.isDuplicate = true
    } else {
      this.showUserList_son.push(
        {
          account: this.user_son.account,
          password: this.user_son.password
        });
      // this.isDuplicate = false;
    }
  }

  /** 清除 */
  clear_son() {
    // if (!this.isDisable) {
    //   this.user_son.account = '';
    // }
    this.user_son.password = '';
    this.showUser_son.account = '';
    this.showUser_son.password = '';
    this.showUserList_son.length = 0;
    // this.isDuplicate = false;
  }

  /** 切換新增/修改 */
  switch_son() {
    // this.isDisable = !this.isDisable;
    // this.title = this.isDisable ? '修改' : '新增';
  }
}
