import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewModalPage } from './new-modal';

@NgModule({
  declarations: [
    NewModalPage,
  ],
  imports: [
    IonicPageModule.forChild(NewModalPage),
  ],
})
export class NewModalPageModule {}
