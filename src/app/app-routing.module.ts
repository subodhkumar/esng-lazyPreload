import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, PreloadingStrategy, Route } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';

const routes: Routes = [
  {
    path:'path1',
    loadChildren: ()=>import('./lazy-one/lazy-one.module').then((mod)=>mod.LazyOneModule),
    data: {preload: true}
  },
  {
    path:'path2',
    loadChildren:()=>import('./lazy-two/lazy-two.module').then((mod)=>mod.LazyTwoModule),
    data: {preload: false}
  }
];

@Injectable({providedIn:'root'})
export class AnotherCustomPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, load: ()=>Observable<any>): Observable<any> {
    return route.data && route.data['preload']? load() : EMPTY;
  }
}
@Injectable({providedIn: 'root'})
export class CustomPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, load: ()=> Observable<any>): Observable<any>{
    if(true) {
      return load();
    }
  else {
    return EMPTY;
  }
  }
}

@Injectable({providedIn:'root'}) 
export class OnDemandPreloadService {
  
}
@Injectable({providedIn:'root',deps:[OnDemandPreloadService]})


@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: AnotherCustomPreloadingStrategy
    // preloadingStrategy: CustomPreloadingStrategy
    // preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
