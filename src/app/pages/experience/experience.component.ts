import { Component, Input, OnInit } from '@angular/core';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  @Input() onFragment = false;
  visible = false;

  public events1: any[] = [
    {
      id: 0,
      status: 'Graduated: Brawijaya University',
      date: '08/2017 - 07/2021',
      icon: PrimeIcons.CHECK_CIRCLE,
      number: undefined,
      color: '#14B8A6',
      description_en: `Graduated with a bachelor degree in Information System and a 3.45 GPA. I've also published one publication about Data Warehouse development. <br> <br>
      While studying here, I've learned alot about the basic of programming, IT infrastructure management, and UI/UX. Beside that, I've also practice and honed my soft skill (such as my team work ability and communication skills).`,
    },
    {
      id: 1,
      status: 'Working: PT. Pasifik Satelit Nusantara',
      date: '10/2021 - Ongoing',
      icon: PrimeIcons.BOOKMARK_FILL,
      number: undefined,
      color: '#007ad9',
      description_en: `PT. Pasifik Satelit Nusantara or PSN is a telecommunication company that handles in manufacturing satellite and providing affordable internet in rural areas. <br><br>
      I'm currently working as a frontend web developer here. Most of my days consist of creating dashboards to monitor those satellites and other variables that may effect them (e.g weather). I also help in mantaining the company Business Support System (BSS) for internal and external purposes. <br><br>
      I mostly use Angular as my frontend framework, but I've also helped some project using django and Code Igniter as the framework.`,
    },
    // {
    //   status: 'The Future',
    //   icon: PrimeIcons.QUESTION_CIRCLE,
    //   number: undefined,
    //   color: '#9C27B0',
    //   description_en: `I'm currently not looking for work, but `,
    // },
  ];

  constructor() {}

  ngOnInit(): void {}

  isIntersecting(status: boolean) {
    if (!status) return;
    this.visible = true;
  }

  cardStyle(onFragment: boolean, visible: boolean, id: number) {
    let fragment = '';
    let displayed = '';

    if (!onFragment) fragment = id % 2 == 0 ? 'slide-right' : 'slide-left';
    if (visible) displayed = 'visible';
    return `${fragment} ${displayed}`;
  }
}
