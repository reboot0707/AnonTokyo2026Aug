import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-practice-form',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './practice-form.html',
  styleUrl: './practice-form.css',
})
export class PracticeForm {
  title = ""

  userForm = new FormGroup({
    account: new FormControl('', [Validators.required, Validators.minLength(4)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  })

  // /** 使用者資料 */
  // user = {
  //   account: "",
  //   password: ""
  // };

  /** 顯示使用者資料 */
  showUser = {
    account: "",
    password: ""
  };

  /** 顯示使用者資料清單 */
  showUserList:
    {
      account: string | null,
      password: string | null
    }[] = [];


  /** 帳號是否可以輸入 */
  isDisable = false;

  /** 帳號是否可以輸入 */
  isDuplicate = false

  /** 送出 */
  submit() {
    let user = this.userForm.value
    this.showUser.account = user.account;
    this.showUser.password = user.password;

    if (this.showUserList.findIndex(x => x.account === this.showUser.account) != -1) {
      this.isDuplicate = true
    } else {
      this.showUserList.push(
        {
          account: this.user.account,
          password: this.user.password
        });
      this.isDuplicate = false;
    }
  }

  /** 清除 */
  clear() {
    if (!this.isDisable) {
      this.user.account = '';
    }
    this.user.password = '';
    this.showUser.account = '';
    this.showUser.password = '';
    this.showUserList.length = 0;
    this.isDuplicate = false;
  }

  /** 切換新增/修改 */
  switch() {
    this.isDisable = !this.isDisable;
    this.title = this.isDisable ? '修改' : '新增';
  }
}
