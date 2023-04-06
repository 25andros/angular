import { NgModule } from '@angular/core';


//components imports go here
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
 import {MatSlideToggleModule} from '@angular/material/slide-toggle'; 

const MaterialComponents = [
  //More components here
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatSlideToggleModule,

  FormsModule,


];

@NgModule({
  declarations: [],
  imports: [MaterialComponents],
  exports: [MaterialComponents],
})
export class MaterialModule { }
