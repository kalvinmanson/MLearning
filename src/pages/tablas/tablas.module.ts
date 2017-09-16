import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TablasPage } from './tablas';

@NgModule({
  declarations: [
    TablasPage,
  ],
  imports: [
    IonicPageModule.forChild(TablasPage),
  ],
})
export class TablasPageModule {}
