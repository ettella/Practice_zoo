import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllatainkComponent } from './allataink/allataink.component';
import { UjLakokComponent } from './uj-lakok/uj-lakok.component';
import { NyitoOldalComponent } from './nyito-oldal/nyito-oldal.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AllatainkComponent,
    UjLakokComponent,
    NyitoOldalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
