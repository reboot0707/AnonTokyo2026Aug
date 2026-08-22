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
  user = {
    account: "",
    password: ""
  };

  /** 顯示使用者資料 */
  showUser = {
    account: "",
    password: ""
  };

  /** 帳號是否可以輸入 */
  isDisable = false;

  /** 送出 */
  submit() {
    if (!(this.user.account && this.user.password)) {
      alert('必須輸入完整');
      return;
    }

    this.showUser.account = this.user.account;
    this.showUser.password = this.user.password;
  }

  /** 清除 */
  clear() {
    if (!this.isDisable) {
      this.user.account = '';
    }
    this.user.password = '';
    this.showUser.account = '';
    this.showUser.password = '';
  }

  /** 切換新增/修改 */
  switch() {
    this.isDisable = !this.isDisable;
    this.title = this.isDisable ? '修改' : '新增';
  }
}
