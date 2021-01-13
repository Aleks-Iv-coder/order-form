import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { OrderTranslationFormComponent } from './order-translation-form/order-translation-form.component';
import { UrgencySelectorComponent } from './urgency-selector/urgency-selector.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {EnumToArrayPipe} from "./enum-to-array-pipe";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OrderTranslationFormComponent,
    UrgencySelectorComponent,
    EnumToArrayPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
