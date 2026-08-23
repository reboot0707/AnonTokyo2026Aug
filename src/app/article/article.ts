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

  popularArticleList = [
    {
      title: '熱門標題',
      content: '熱門內容'
    },
    {
      title: '熱門標題1',
      content: '熱門內容1'
    },
    {
      title: '熱門標題2',
      content: '熱門內容2'
    },
    {
      title: '熱門標題3',
      content: '熱門內容3'
    },
    {
      title: '熱門標題4',
      content: '熱門內容4'
    },
    {
      title: '熱門標題5',
      content: '熱門內容5'
    },
    {
      "title": "熱門標題6",
      "content": "熱門內容6"
    },
    {
      "title": "熱門標題7",
      "content": "熱門內容7"
    },
    {
      "title": "熱門標題8",
      "content": "熱門內容8"
    },
    {
      "title": "熱門標題9",
      "content": "熱門內容9"
    },
    {
      "title": "熱門標題10",
      "content": "熱門內容10"
    },
    {
      "title": "熱門標題11",
      "content": "熱門內容11"
    },
    {
      "title": "熱門標題12",
      "content": "熱門內容12"
    },
    {
      "title": "熱門標題13",
      "content": "熱門內容13"
    },
    {
      "title": "熱門標題14",
      "content": "熱門內容14"
    },
    {
      "title": "熱門標題15",
      "content": "熱門內容15"
    },
    {
      "title": "熱門標題16",
      "content": "熱門內容16"
    },
    {
      "title": "熱門標題17",
      "content": "熱門內容17"
    },
    {
      "title": "熱門標題18",
      "content": "熱門內容18"
    },
    {
      "title": "熱門標題19",
      "content": "熱門內容19"
    },
    {
      "title": "熱門標題20",
      "content": "熱門內容20"
    }
  ]

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

  addArticle() {
    this.popularArticleList.push({ title: 'a', content: 'a' });
  }
}
