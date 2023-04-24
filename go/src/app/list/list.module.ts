import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitsComponent } from './units/units.component';
import { QuotesComponent } from './quotes/quotes.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';

import { MaterialModule } from '../material/material.module';
import { ItemsComponent } from './units/items/items.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { FeaturesComponent } from './features/features.component';
import { BikeComponent } from './bike/bike.component';


@NgModule({
  declarations: [
    UnitsComponent,
    QuotesComponent,
    ErrorComponent,
    HomeComponent,
    ItemsComponent,
    AboutComponent,
    ProjectsComponent,
    FeaturesComponent,
    BikeComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    UnitsComponent,
    QuotesComponent,
    ErrorComponent,
    HomeComponent,
  ]
})
export class ListModule {

}
