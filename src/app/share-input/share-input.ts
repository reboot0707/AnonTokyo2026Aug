import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-share-input',
  imports: [FormsModule],
  templateUrl: './share-input.html',
  styleUrl: './share-input.css',
})
export class ShareInput {
  // @Input() account = '';
  // @Input() password = '';
  @Input() accountPlaceHolder = 'ID';
  @Input() passwordPlaceHolder = 'Password';

  @Output() submitEmitter = new EventEmitter();

  // // Hook / construct (新重點)
  // constructor() {
  //   console.log('constructor');
  // }

  // 多增加物件的input (新重點)
  @Input() inputUser = {
    inputAccount: '',
    inputPwd: ''
  };

  // SubmitUser = {

  // }

  // ngOnInit() {
  //   console.log('ngOnInit');
  // }

  // ngOnChanges(change: SimpleChanges) {
  //   console.log('ngOnChanges', change);

  //   if (change['inputUser'] && change['inputUser'].currentValue) {
  //     console.log('ngOnChanges-inputUser', change['inputUser']);
  //   }
  // }

  // ngDoCheck() {
  //   console.log('ngDoCheck');
  // }

  // ngAfterContentInit() {
  //   console.log('ngAfterContentInit');
  // }
  // ngAfterContentChecked() {
  //   console.log('ngAfterContentChecked');
  // }

  // ngAfterViewInit() {
  //   console.log('ngAfterViewInit');
  // }

  // ngAfterViewChecked() {
  //   console.log('ngAfterViewChecked');
  // }

  // ngOnDestroy() {
  //   console.log('ngOnDestroy');
  // }

  submit(para: any) {
    this.submitEmitter.emit(
      {
        account: this.inputUser.inputAccount,
        password: this.inputUser.inputPwd
      }
    );
  }
}
