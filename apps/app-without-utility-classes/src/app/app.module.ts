import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'page-1',
        loadChildren: () =>
          import('../page1/page1.module').then((m) => m.Page1Module),
      },
      {
        path: 'page-2',
        loadChildren: () =>
          import('../page2/page2.module').then((m) => m.Page2Module),
      },
      {
        path: 'page-3',
        loadChildren: () =>
          import('../page3/page3.module').then((m) => m.Page3Module),
      },
      {
        path: '**',
        redirectTo: '/page-1',
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
