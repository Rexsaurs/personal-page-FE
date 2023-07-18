import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  @Input() onFragment = false;
  visible = false;

  constructor() {}

  ngOnInit(): void {}

  isIntersecting(status: boolean) {
    if (!status) return;
    this.visible = true;
  }
  emailMe() {
    window.location.href = `mailto:titorhenaldi.business@gmail.com`;
  }
}
