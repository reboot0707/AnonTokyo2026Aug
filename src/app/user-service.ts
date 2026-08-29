import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from './article/article';
import { ArticleItem } from '../interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  account = 'Ann';
  password = 'soyoSecret'

  constructor(private httpclient: HttpClient) {
  }

  getUserInfo() {
    return {
      account: this.account,
      password: this.password
    }
  }

  getArticle() {
    return this.httpclient.get<ArticleItem[]>('https://localhost:7246/Article');
  }
}
