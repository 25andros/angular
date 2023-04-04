import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { routingComponents } from './app-routing.module';

import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { OmegaComponent } from './omega/omega.component';
import { AaaIntroComponent } from './aaa-intro/aaa-intro.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    OmegaComponent,
    AaaIntroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
