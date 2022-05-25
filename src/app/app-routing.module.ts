import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path : "",
    redirectTo : "",
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path : "Home",
    redirectTo : "",
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path:"detalis",
    loadChildren: ()=> import('./detalis/detalis.module').then(m=>m.DetalisModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
