import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu'; 
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatProgressBarModule} from '@angular/material/progress-bar'; 
import {MatDividerModule} from '@angular/material/divider'; 

const MaterialComponents = [
  CommonModule,
  FormsModule,

  MatButtonModule,
  MatSlideToggleModule,
  MatToolbarModule,
  MatCardModule,
  MatIconModule,
  MatMenuModule,
  MatSidenavModule,
  MatProgressBarModule,
  MatDividerModule,

];


@NgModule({
  declarations: [],
  imports: [
    MaterialComponents,
  ],
  exports: [
    MaterialComponents,
  ]
})
export class MaterialModule { }
