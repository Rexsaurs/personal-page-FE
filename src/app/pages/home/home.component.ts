import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @Input() onFragment = false;
  visible = false;

  constructor(private router: Router) {}

  ngOnInit() {}

  navigateSection() {
    this.router.navigate(['/'], { fragment: 'about' });
  }

  isIntersecting(status: boolean) {
    if (!status) return;
    this.visible = true;
  }
}
