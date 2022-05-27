import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalisRoutingModule } from './detalis-routing.module';
import { LeadDetailsComponent } from './lead-details/lead-details.component';
import {FieldsetModule} from 'primeng/fieldset';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {MultiSelectModule} from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';
import {ProgressBarModule} from 'primeng/progressbar';
import {SliderModule} from 'primeng/slider';
import {ToastModule} from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';


@NgModule({
  declarations: [
    LeadDetailsComponent
  ],
  imports: [
    CommonModule,
    DetalisRoutingModule,
    FieldsetModule,
    TableModule,
    DropdownModule,
    MultiSelectModule,
    FormsModule,
    ProgressBarModule,
    SliderModule,
    ToastModule,
    ConfirmDialogModule
  ]
})
export class DetalisModule { }
