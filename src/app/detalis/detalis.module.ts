import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalisRoutingModule } from './detalis-routing.module';
import { LeadDetailsComponent } from './lead-details/lead-details.component';
import {FieldsetModule} from 'primeng/fieldset';
import {TableModule} from 'primeng/table';
@NgModule({
  declarations: [
    LeadDetailsComponent
  ],
  imports: [
    CommonModule,
    DetalisRoutingModule,
    FieldsetModule,
    TableModule
  ]
})
export class DetalisModule { }
