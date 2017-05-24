import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DatepickPage } from './datepick';

@NgModule({
  declarations: [
    DatepickPage,
  ],
  imports: [
    IonicPageModule.forChild(DatepickPage),
  ],
  exports: [
    DatepickPage
  ]
})
export class DatepickPageModule {}
