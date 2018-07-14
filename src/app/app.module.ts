import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { BnkGirlListComponent } from './component/bnk-girl-list/bnk-girl-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BnkGirlListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
