import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyCOneComponent } from './lazy-cone/lazy-cone.component';

const routes: Routes = [
  {
    path:'',
    component: LazyCOneComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyOneRoutingModule { }
