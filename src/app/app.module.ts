import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataServicsService } from './Servies/data-servics.service';
import { HttpClientModule } from '@angular/common/http';
import {ConfirmationService} from 'primeng/api';
import { MessageService } from 'primeng/api';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [DataServicsService,ConfirmationService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
