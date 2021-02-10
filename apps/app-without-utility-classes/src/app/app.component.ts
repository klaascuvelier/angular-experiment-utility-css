import { Component } from '@angular/core';

@Component({
  selector: 'angular-experiment-utility-css-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <nav>
      <ul>
        <li>
          <a routerLink="/page-1" routerLinkActive="active">Page 1</a>
        </li>
        <li>
          <a routerLink="/page-2" routerLinkActive="active">Page 2</a>
        </li>
        <li>
          <a routerLink="/page-3" routerLinkActive="active">Page 3</a>
        </li>
      </ul>
    </nav>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'app-without-utility-classes';
}
