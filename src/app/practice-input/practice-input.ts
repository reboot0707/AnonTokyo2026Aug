import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-practice-input',
  imports: [FormsModule],
  templateUrl: './practice-input.html',
  styleUrl: './practice-input.css',
})
export class PracticeInput {

  // 這個沒必要開出去
  isDisable = false;

  @Input() user_son = {
    account: "",
    password: ""
  };

  @Output() submitEmitter = new EventEmitter();
  @Output() clearEmitter = new EventEmitter();
  @Output() SwitchEmitter = new EventEmitter();

  /** 送出 */
  submit_son() {
    this.submitEmitter.emit(
      {
        account: this.user_son.account,
        password: this.user_son.password
      }
    );
  }

  /** 清除 */
  clear_son() {
    // if (!this.isDisable) {
    //   this.user_son.account = '';
    // }
    // this.user_son.password = '';
    // this.showUser_son.account = '';
    // this.showUser_son.password = '';
    // this.showUserList_son.length = 0;
    // this.isDuplicate = false;
  }

  /** 切換新增/修改 */
  switch_son() {
    // this.isDisable = !this.isDisable;
    // this.title = this.isDisable ? '修改' : '新增';
  }
}
