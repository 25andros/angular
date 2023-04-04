import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlphaComponent } from './alpha/alpha.component';
import { BetaComponent } from './beta/beta.component'

const routes: Routes = [
  { path: 'alpha', component: AlphaComponent },
  { path: 'beta', component: BetaComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponents = [AlphaComponent, BetaComponent]

