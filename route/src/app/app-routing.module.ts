import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlphaComponent } from './alpha/alpha.component';
import { BetaComponent } from './beta/beta.component'
import { OmegaComponent } from './omega/omega.component'
import { AaaIntroComponent } from './aaa-intro/aaa-intro.component'

const routes: Routes = [
  //{ path: '', component: AaaIntroComponent }, // Default route
  { path: '', redirectTo: '/lander', pathMatch: 'full' }, // Default route

  { path: 'lander', component: AaaIntroComponent },
  { path: 'alpha', component: AlphaComponent },
  { path: 'beta', component: BetaComponent },
  { path: 'aaa', component: AaaIntroComponent },
  { path: '404', component: OmegaComponent },

  // The following line is the default route, always keep it at the bottom
  { path: '**', component: OmegaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponents = [AlphaComponent, BetaComponent, OmegaComponent, AaaIntroComponent]

