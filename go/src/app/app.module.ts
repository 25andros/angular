import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { LoremComponent } from './lorem/lorem.component';

import { ListModule } from './list/list.module';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,
    LoremComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ListModule,
    CoreModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
