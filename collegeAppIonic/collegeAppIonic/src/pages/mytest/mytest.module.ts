import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MytestPage } from './mytest';

@NgModule({
  declarations: [
    MytestPage,
  ],
  imports: [
    IonicPageModule.forChild(MytestPage),
  ],
  exports: [
    MytestPage
  ]
})
export class MytestPageModule {}
