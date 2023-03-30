import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DemoBuildComponent } from './demo-build/demo-build.component';
import { AlphaComponent } from './alpha/alpha.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoBuildComponent,
    AlphaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
