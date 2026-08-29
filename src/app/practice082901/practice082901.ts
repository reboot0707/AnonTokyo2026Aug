import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputVerify } from '../input-verify';

@Component({
  selector: 'app-practice082901',
  imports: [FormsModule, NgClass],
  templateUrl: './practice082901.html',
  styleUrl: './practice082901.css',
})

export class Practice082901 {
  inputtext = "";

  constructor(private inputVerify: InputVerify) {
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  get isOK(): boolean {
    return this.inputVerify.verifyThisString(this.inputtext, 5);
  }
}
