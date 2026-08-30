import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InputVerify {
  input_string = '';

  verifyThisString(argString: string, argCountOk: number): boolean {
    if (!argString || argString.length < argCountOk) {
      return false
    }
    return true;
  }
}
