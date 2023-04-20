import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { dogs } from '../../dogs';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent {

@Input() nomen:dogs[]=[] ;

@Input()i:number=0;

  //name:string="yellow";

    display(){
  console.log(this.nomen);

  }


}
