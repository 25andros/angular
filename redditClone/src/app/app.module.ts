import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';

import { AlphaComponent } from './alpha/alpha.component';
import { BetaComponent } from './beta/beta.component';
import { GammaComponent } from './gamma/gamma.component';
import { DeltaComponent } from './delta/delta.component';
import { EpsilonComponent } from './epsilon/epsilon.component';
import { FoxtrotComponent } from './foxtrot/foxtrot.component';
import { ListEmComponent } from './list-em/list-em.component';
import { EmloyeeCardComponent } from './emloyee-card/emloyee-card.component';

@NgModule({
  declarations: [AppComponent, AlphaComponent, BetaComponent, GammaComponent, DeltaComponent, EpsilonComponent, FoxtrotComponent, ListEmComponent, EmloyeeCardComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MaterialModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
