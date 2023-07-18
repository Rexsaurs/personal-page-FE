import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  @Input() onFragment = false;
  visible = false;

  constructor() {}

  ngOnInit(): void {}

  isIntersecting(status: boolean) {
    if (!status) return;
    this.visible = true;
  }
}
