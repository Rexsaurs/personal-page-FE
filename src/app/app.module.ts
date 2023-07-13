import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { PagesModule } from './pages/pages.module';
import { SectionObserverDirective } from './core/directives/section-observer.directive';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    SectionObserverDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
