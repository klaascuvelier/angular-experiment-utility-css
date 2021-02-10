import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Page2Component } from './page2.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: Page2Component }]),
  ],
  declarations: [Page2Component],
})
export class Page2Module {}
