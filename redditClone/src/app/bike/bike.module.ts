import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WtaComponent } from './wta/wta.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    WtaComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    WtaComponent,
  ],

})
export class BikeModule { }
