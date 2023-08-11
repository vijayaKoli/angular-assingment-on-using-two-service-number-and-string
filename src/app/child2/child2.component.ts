import { Component } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {

  capitalCount: number | undefined;

  constructor(private stringService: StringService){}

  ngOnInit(){
    const str = 'MarVellousInFosYstem';

    this.capitalCount = this.stringService.capitalCount(str);
    

  }


}
