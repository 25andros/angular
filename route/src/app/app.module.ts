import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { routingComponents } from './app-routing.module';

import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { HeadComponent } from './head/head.component';
import { NaviComponent } from './navi/navi.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeadComponent,
    NaviComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,

    //keep module component separate...
    SharedModule,
    CoreModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
