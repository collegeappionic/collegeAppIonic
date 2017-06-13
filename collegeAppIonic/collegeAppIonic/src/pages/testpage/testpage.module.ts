import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestpagePage } from './testpage';

@NgModule({
  declarations: [
    TestpagePage,
  ],
  imports: [
    IonicPageModule.forChild(TestpagePage),
  ],
  exports: [
    TestpagePage
  ]
})
export class TestpagePageModule {}
