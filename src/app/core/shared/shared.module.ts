import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionObserverDirective } from '../directives/section-observer.directive';

@NgModule({
  declarations: [SectionObserverDirective],
  imports: [CommonModule],
  exports: [SectionObserverDirective],
})
export class SharedModule {}
