import { Component, OnInit } from '@angular/core';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  public events1: any[] = [
    {
      status: 'Graduated: Brawijaya University',
      date: '08/2017 - 07/2021',
      icon: undefined,
      number: 1,
      color: '#9C27B0',
      image: 'game-controller.jpg',
    },
    {
      status: 'Working: PT. Pasifik Satelit Nusantara',
      date: '10/2021 - Ongoing',
      icon: PrimeIcons.CHECK_CIRCLE,
      number: undefined,
      color: '#673AB7',
    },
    {
      status: 'Shipped',
      date: '15/10/2020 16:15',
      icon: PrimeIcons.ENVELOPE,
      number: undefined,
      color: '#FF9800',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
