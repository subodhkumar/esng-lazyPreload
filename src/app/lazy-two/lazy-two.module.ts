import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyTwoRoutingModule } from './lazy-two-routing.module';
import { LazyCTwoComponent } from './lazy-ctwo/lazy-ctwo.component';

@NgModule({
  declarations: [LazyCTwoComponent],
  imports: [
    CommonModule,
    LazyTwoRoutingModule
  ]
})
export class LazyTwoModule { }
