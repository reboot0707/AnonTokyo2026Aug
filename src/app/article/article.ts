import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  imports: [NgClass, NgStyle],
  templateUrl: './article.html',
  styleUrl: './article.css',
})
export class Article {
  fontSize = 10;
  isRed = true;
  isPopular = false;

  myClick() {
    this.isRed = !this.isRed;
    console.log(this.isRed);
  }

  myFontClick() {
    this.fontSize += 2;
  }

  popularArt() {
    this.isPopular = true;
  }

  normalArt() {
    this.isPopular = false;
  }
}
