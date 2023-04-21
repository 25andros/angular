import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterLink } from '@angular/router';
import { SideComponent } from './side/side.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SideComponent,
  ],
  imports: [
    CommonModule,

    MaterialModule,

    RouterLink,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SideComponent,

  ]
})
export class CoreModule { }
