import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { startWith } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  data = {
  choice: '',
  }

  constructor (private route:Router) { }

  goNavi() {
  //alert(this.data.choice);
  this.route.navigate(['/',this.data.choice]);
  }

  //autocomplete
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }
  myControl = new FormControl('');
  options: string[] = ['quotes', 'doggies', 'Three'];
  filteredOptions!: Observable<string[]> ;

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
