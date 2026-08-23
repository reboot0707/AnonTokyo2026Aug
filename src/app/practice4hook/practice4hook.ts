import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice4hook',
  imports: [],
  templateUrl: './practice4hook.html',
  styleUrl: './practice4hook.css',
})
export class Practice4hook implements OnInit {
  showcontent: string = "this is an ad";
  showAd = false;

  ngOnInit(): void {
    // this.txthere
  }
}
