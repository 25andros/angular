import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
 import {MatTableModule} from '@angular/material/table'; 



const MaterialComponents = [
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatButtonToggleModule,
  MatSliderModule,
  MatBadgeModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatRadioModule,
  FormsModule,
  MatMenuModule,
  MatSlideToggleModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatGridListModule,
  MatExpansionModule,
  MatSidenavModule,
  MatSelectModule,
  MatTableModule,
];

@NgModule({
  declarations: [],
  imports: [MaterialComponents],
  exports: [MaterialComponents],
})
export class MaterialModule { }
