import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  account = 'Ann';
  password = 'soyoSecret'

  getUserInfo() {
    return {
      account: this.account,
      password: this.password
    }
  }
}
