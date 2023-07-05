import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Tito Rhenaldi';

  public sections = ['home', 'about', 'experience', 'contact'];

  constructor(private router: Router) {}

  isIntersecting(status: boolean, element: string) {
    console.log('Element ' + element + ' is intersecting ' + status);

    if (!status) return;

    this.router.navigate([], { fragment: element });
  }
}
