import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CapitalizadoPipe } from '../app/pipes/capitalizado.pipe';

import { LOCALE_ID } from '@angular/core';

import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { ContrasenaPipe } from './pipes/contrasena.pipe';
registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    ContrasenaPipe
  ],
  imports: [
    BrowserModule
  ],
providers: [ {provide: LOCALE_ID, useValue: "es"}],
  bootstrap: [AppComponent]
})
export class AppModule { 
    
 }
