import { NgModule } from '@angular/core';
import {
  ActivatedRoute,
  ExtraOptions,
  RouterModule,
  Routes,
} from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/pages.module').then((m) => m.PagesModule),
      },
    ],
  },
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled', //On change of router url the position of the screen will set to the top.
  anchorScrolling: 'enabled', //When set to ‘enabled’, scrolls to the anchor element when the URL has a fragment. Anchor scrolling is disabled by default.
  scrollOffset: [0, 0], //Configures the scroll offset the router will use when scrolling to an element.
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(private activatedRoute: ActivatedRoute) {
    // Subscribe to the route's fragment changes to update the scrollOffset
    this.activatedRoute.fragment.subscribe((fragment) => {
      routerOptions.scrollOffset = [0, fragment === 'contact' ? -100 : 0];
    });
  }
}
