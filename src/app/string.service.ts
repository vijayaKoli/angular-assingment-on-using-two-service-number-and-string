import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {
  capitalCount(str: string): number | undefined {
    throw new Error('Method not implemented.');
  }
  chkUpperCaseCount(str: string): number {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
      if (str[i].toUpperCase() === str[i]) {
        count++;
      }
    }

    return count;

  }
}
