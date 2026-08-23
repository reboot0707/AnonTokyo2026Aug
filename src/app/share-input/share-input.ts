import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-share-input',
  imports: [FormsModule],
  templateUrl: './share-input.html',
  styleUrl: './share-input.css',
})
export class ShareInput {
  @Input() account = '';
  @Input() password = '';
  @Input() accountPlaceHolder = '';
  @Input() passwordPlaceHolder = '';

  @Output() submitEmitter = new EventEmitter();

  submit() {
    this.submitEmitter.emit(
      {
        account: this.account,
        password: this.password
      }
    );
  }
}
