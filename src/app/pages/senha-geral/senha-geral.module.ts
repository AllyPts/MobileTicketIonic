import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SenhaGeralPageRoutingModule } from './senha-geral-routing.module';

import { SenhaGeralPage } from './senha-geral.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SenhaGeralPageRoutingModule
  ],
  declarations: [SenhaGeralPage]
})
export class SenhaGeralPageModule {}
