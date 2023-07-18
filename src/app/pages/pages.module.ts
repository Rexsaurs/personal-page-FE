import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';

import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ScrollPanelModule } from 'primeng/scrollpanel';

import { SharedModule } from '../core/shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ExperienceComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    TimelineModule,
    CardModule,
    ButtonModule,
    ScrollPanelModule,
    SharedModule,
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ExperienceComponent,
  ],
})
export class PagesModule {}
