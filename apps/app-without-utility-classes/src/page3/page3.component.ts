import { Component } from '@angular/core';

@Component({
  selector: 'page3',
  styleUrls: ['page3.component.scss'],
  template: `
    <div class="wrapper">
      <div class="sidebar-left">
        <div class="sidebar-left-header"></div>
        <div class="sidebar-left-content"></div>
      </div>
      <div class="content">
        <div class="content-header">Page 3</div>
        <div class="content-content"></div>
        <div class="content-footer"></div>
      </div>
      <div class="sidebar-right">
        <div class="sidebar-right-header"></div>
        <div class="sidebar-right-content"></div>
      </div>
    </div>
  `,
})
export class Page3Component {}
