import { Component } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {

  isPrime: boolean | undefined;

  constructor(private numberService: NumberService) {}

  ngOnInit() {
    const number = 13; 

    this.isPrime = this.numberService.ChkPrime(number);
  }
}


