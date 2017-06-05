﻿import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SmartTableTestComponent } from './smart-table-test/smart-table-test.component';

@NgModule({
  declarations: [
    AppComponent,
    SmartTableTestComponent
  ],
  imports: [
      BrowserModule,
      Ng2SmartTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
