import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

export interface spec_Sheet {

  gear: number;
  position: number;
  ratio: number;
}

/*
const SPEED_DATA : spec_Sheet[] = [

  { gear: 1, position: 1, ratio: 1 },
  { gear: 2, position: 2, ratio: 2 },
];
*/

export interface PeriodicElement2 {
  position: number;
  name: string;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA2: PeriodicElement2[] = [
  {position: 11, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

export interface PeriodicElement {
  position: number;
  name: string;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


interface Food {
  value: string;
  viewValue: string;
}

interface Car {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-wta',
  templateUrl: './wta.component.html',
  styleUrls: ['./wta.component.css']
})

export class WtaComponent {

SPEED_DATA : spec_Sheet[] = [

  { gear: 1, position: 1, ratio: 1 },
  { gear: 2, position: 2, ratio: 2 },
];

  displayedColumns0:string[] = ['gear', 'position', 'ratio'];
  //dataSource0 = SPEED_DATA;

  displayedColumns2: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource2 = ELEMENT_DATA2;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];
  cars: Car[] = [
    { value: 'volvo', viewValue: 'Volvo' },
    { value: 'saab', viewValue: 'Saab' },
    { value: 'mercedes', viewValue: 'Mercedes' },
  ];

  /*
  exampleForm = new FormGroup({

    foodControl: new FormControl(this.foods[2].value),
    carControl: new FormControl(this.cars[1].value),
  });
 */

    foodControl = new FormControl(this.foods[2].value);
    carControl = new FormControl(this.cars[1].value);
  
    exampleForm = new FormGroup({
      food: this.foodControl,
      car: this.carControl,
    });
}
