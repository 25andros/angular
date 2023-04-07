import { Component } from '@angular/core';
import { WebService } from './service/web.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WebService],
})

export class AppComponent {
  //variables

  data = {
    title: 'Core - Index',
  };

  choice = 0;

  currentItem = 'Zack';
  items = ['item1', 'item2', 'item3', 'item4'];

  //Child Output functions

  addItem(newItem: string) {
    this.items.push(newItem);
  }

  newCI(alpha: string) {
    this.currentItem = alpha;
    console.log(alpha);
  }

  actionOne(alpha: any) {
    console.log(alpha);
    console.log(typeof alpha);
    alpha = ~~alpha;
    console.log(typeof alpha);
    this.choice = alpha;
  }
  actionTwo(alpha:any) {
      console.log(alpha);
  }


  constructor(private employees:WebService) {
  }


  users:{name:string, age:number, status:string}[] = [];

  ngOnInit() {

  this.users = this.employees.users;
  }
}
