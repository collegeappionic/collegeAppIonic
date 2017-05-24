import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActionsheetComponent } from './actionsheet';

@NgModule({
  declarations: [
    ActionsheetComponent,
  ],
  imports: [
    IonicPageModule.forChild(ActionsheetComponent),
  ],
  exports: [
    ActionsheetComponent
  ]
})
export class ActionsheetComponentModule {}
