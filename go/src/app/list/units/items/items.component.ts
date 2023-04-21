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

  extras:number=0;

  //name:string="yellow";

    display(){
 // console.log(this.nomen[i].name);

    console.log(this.extras);

  }

  display2(alpha:any){
  this.nomen[alpha].likes+=1;
    
   // this.extras+=1;
    //console.log(this.extras);
    console.log(this.nomen[alpha].likes);

  }

}
