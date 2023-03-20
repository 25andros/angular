import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //variables

  data = {
    title: 'Core Top Load',
  };

  choice = 3;

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
}
