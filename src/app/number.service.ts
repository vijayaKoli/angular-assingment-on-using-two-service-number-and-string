import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {
  ChkPrime(number: number): boolean | undefined {
    throw new Error('Method not implemented.');
  }

  chkPrime(num: number): boolean
   {
    if (num <= 1) {
      return false;
    }

    for (let i = 2; i * i <= num; i++) {
      if (num % i == 0) {
        return false;
      }
    }

    return true;


   }
}
