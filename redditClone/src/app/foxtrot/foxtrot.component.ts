import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable, of } from 'rxjs';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-foxtrot',
  templateUrl: './foxtrot.component.html',
  styleUrls: ['./foxtrot.component.css'],
})

export class FoxtrotComponent implements OnInit {

  doMore() {
    //this.persons[0].name = "Luke";
  }

  out() {
    console.log(this.dataSource);
  }

  constructor() { };

  ngOnInit(): void {

    /*
    this.persons$.subscribe((persons) => {
      console.log(persons);
    });
*/
    this.documentClick$.subscribe((e)=>{
      console.log(e);

      })
  }


  documentClick$ = fromEvent(document, 'click');


  persons = [
    { name: 'zack', gender: 'male' },
    { name: 'mac', gender: 'male' },
    { name: 'jo', gender: 'male' },
  ];

  persons$ = of(this.persons);


  //periodic table portion

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  dataSource: PeriodicElement[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },

  ];

  dataSource$ = of(this.dataSource);

}
