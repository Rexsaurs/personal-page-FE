import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ExperienceComponent,
  ],
  imports: [CommonModule, PagesRoutingModule],
  exports: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ExperienceComponent,
  ],
})
export class PagesModule {}
