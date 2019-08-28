import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {XxxAlertModule, XxxErrorHandlerModule, XxxLogModule, XxxMessageModule} from '@app/xxx-common';
import {XxxHeaderModule} from '@app/modules/xxx-header/xxx-header.module';
import {XxxHomePageModule} from '@app/modules/xxx-home-page/xxx-home-page.module';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    XxxAlertModule,
    XxxErrorHandlerModule,
    XxxHeaderModule,
    XxxHomePageModule,
    XxxLogModule,
    XxxMessageModule,
    AppRoutingModule
  ]
})

export class AppModule {
}
