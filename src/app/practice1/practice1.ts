import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-practice1',
  imports: [FormsModule],
  templateUrl: './practice1.html',
  styleUrl: './practice1.css',
})
export class Practice1 {
  /** 標題 */
  title = '新增';

  /** 使用者資料 */
  inputUser = {
    account: "",
    password: ""
  };

  /** 顯示使用者資料 */
  showUser = {
    account: "",
    password: ""
  };

  inputUserList: { account: string; password: string }[] = [];
  // TODO: 有比較好的宣告方式

  /** 帳號是否可以輸入 */
  isDisable = false;

  /** 送出 */
  submit() {
    if (!(this.inputUser.account && this.inputUser.password)) {
      alert('必須輸入完整');
      return;
    }

    // TODO: 用 findIndex 搭配 Lambda 函式, 重複後 IsDuplicated
    // for (item of this.inputUserList) {
    //   if (this.inputUser.account === item.account) {
    //     return;
    //   }
    // }


    this.showUser.account = this.inputUser.account;
    this.showUser.password = this.inputUser.password;
    this.inputUserList.push({ ...this.showUser })
  }

  /** 清除 */
  clear() {
    if (!this.isDisable) {
      this.inputUser.account = '';
    }
    this.inputUser.password = '';
    this.showUser.account = '';
    this.showUser.password = '';
  }

  /** 切換新增/修改 */
  switch() {
    this.isDisable = !this.isDisable;
    this.title = this.isDisable ? '修改' : '新增';
  }
}
