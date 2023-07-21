import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Tito Rhenaldi';
  fragmentSubscription = new Subscription();
  startOnFragment = [false, false, false, false];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnDestroy(): void {
    this.fragmentSubscription.unsubscribe();
  }

  ngOnInit() {
    this.fragmentSubscription = this.route.fragment.subscribe((fragment) => {
      switch (fragment) {
        case 'about':
          this.shownSections(1);
          break;
        case 'experience':
          this.shownSections(2);
          break;
        case 'contact':
          this.shownSections(3);
          break;
        default:
          this.shownSections(0);
          break;
      }
    });
  }

  //fragment: 1 = home, 2 = about, 3 = experience, and 4 = contact
  shownSections(fragment: number) {
    for (let i = 0; i < fragment; i++) {
      this.startOnFragment[i] = true;
    }
  }
}
