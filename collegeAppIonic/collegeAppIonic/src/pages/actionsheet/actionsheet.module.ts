import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActionsheetPage } from './actionsheet';

@NgModule({
  declarations: [
    ActionsheetPage,
  ],
  imports: [
    IonicPageModule.forChild(ActionsheetPage),
  ],
  exports: [
    ActionsheetPage
  ]
})
export class ActionsheetPageModule {}
