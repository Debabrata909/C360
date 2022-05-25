import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeadDetailsComponent } from './lead-details/lead-details.component';
const routes: Routes = [
  {
    path : "",
    component: LeadDetailsComponent
  },
  {
    path : "lead-detalis",
    component: LeadDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetalisRoutingModule { }
