import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoremComponent } from './lorem/lorem.component';
import { QuotesComponent } from './list/quotes/quotes.component';
import { ErrorComponent } from './list/error/error.component';
import { HomeComponent } from './list/home/home.component';
import { UnitsComponent } from './list/units/units.component';

const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route

  { path: 'home', component: HomeComponent },
  { path: 'doggies', component: UnitsComponent },

  { path: 'lorem', component: LoremComponent },
  { path: 'quotes', component: QuotesComponent },
  { path: '404', component: ErrorComponent },

  // The following line is the default route, always keep it at the bottom
  { path: '**', component: ErrorComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
