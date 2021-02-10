import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Page3Component } from './page3.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild([
    {path: '', component: Page3Component}
  ])],
  declarations: [Page3Component]
})
export class Page3Module {}
