import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoremComponent } from './lorem/lorem.component';

const routes: Routes = [


  { path: 'lorem', component: LoremComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
