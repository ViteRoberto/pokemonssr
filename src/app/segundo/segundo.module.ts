import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SegundoPageRoutingModule } from './segundo-routing.module';

import { SegundoPage } from './segundo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SegundoPageRoutingModule
  ],
  declarations: [SegundoPage]
})
export class SegundoPageModule {}
