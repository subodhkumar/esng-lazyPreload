import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyCTwoComponent } from './lazy-ctwo/lazy-ctwo.component';

const routes: Routes = [
  {
    path:'',
    component:LazyCTwoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyTwoRoutingModule { }
