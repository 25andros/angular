import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitsComponent } from './units/units.component';



@NgModule({
  declarations: [
    UnitsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UnitsComponent,
  ]
})
export class ListModule { }
