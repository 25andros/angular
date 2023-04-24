import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuotesComponent } from './list/quotes/quotes.component';
import { ErrorComponent } from './list/error/error.component';
import { HomeComponent } from './list/home/home.component';
import { UnitsComponent } from './list/units/units.component';
import { AboutComponent } from './list/about/about.component';
import { ProjectsComponent } from './list/projects/projects.component';
import { FeaturesComponent } from './list/features/features.component';

const routes: Routes = [

 // Default route
  { path: '', redirectTo: '/index', pathMatch: 'full' }, 

  { path: 'about', component: AboutComponent },
  { path: 'index', component: HomeComponent },
  { path: '404', component: ErrorComponent },

  { path: 'projects', component: ProjectsComponent },
  { path: 'quotes', component: QuotesComponent },
  { path: 'doggies', component: UnitsComponent },
  { path: 'features', component: FeaturesComponent },

  // The following line is the default route, always keep it at the bottom
  { path: '**', component: ErrorComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
