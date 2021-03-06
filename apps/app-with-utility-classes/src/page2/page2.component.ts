import { Component } from '@angular/core';

@Component({
  selector: 'page2',
  styleUrls: ['page2.component.scss'],
  template: `
    <div class="layout-horizontal wrapper">
      <div class="sidebar left layout-vertical">
        <div class="header"></div>
        <div class="content"></div>
      </div>
      <div class="content layout-vertical">
        <div class="header valign-center">Page 2</div>
        <div class="content"></div>
        <div class="footer"></div>
      </div>
      <div class="sidebar right layout-vertical">
        <div class="header"></div>
        <div class="content"></div>
      </div>
    </div>
  `,
})
export class Page2Component {}
