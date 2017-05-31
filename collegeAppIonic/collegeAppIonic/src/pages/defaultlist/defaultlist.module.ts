import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DefaultlistPage } from './defaultlist';

@NgModule({
  declarations: [
    DefaultlistPage,
  ],
  imports: [
    IonicPageModule.forChild(DefaultlistPage),
  ],
  exports: [
    DefaultlistPage
  ]
})
export class DefaultlistPageModule {}
