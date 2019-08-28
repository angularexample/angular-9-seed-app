import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';

import {XxxHeaderComponent} from './xxx-header.component';

@NgModule({
  declarations: [XxxHeaderComponent],
  exports: [XxxHeaderComponent],
  imports: [
    CommonModule,
    MatToolbarModule
  ]
})

export class XxxHeaderModule {
}
