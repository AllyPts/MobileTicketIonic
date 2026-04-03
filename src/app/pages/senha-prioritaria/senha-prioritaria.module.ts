import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SenhaPrioritariaPageRoutingModule } from './senha-prioritaria-routing.module';

import { SenhaPrioritariaPage } from './senha-prioritaria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SenhaPrioritariaPageRoutingModule
  ],
  declarations: [SenhaPrioritariaPage]
})
export class SenhaPrioritariaPageModule {}
