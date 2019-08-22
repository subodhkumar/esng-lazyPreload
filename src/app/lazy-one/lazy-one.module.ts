import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyOneRoutingModule } from './lazy-one-routing.module';
import { LazyCOneComponent } from './lazy-cone/lazy-cone.component';

@NgModule({
  declarations: [LazyCOneComponent],
  imports: [
    CommonModule,
    LazyOneRoutingModule
  ]
})
export class LazyOneModule { }
