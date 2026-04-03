import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RetiradaExamesPageRoutingModule } from './retirada-exames-routing.module';

import { RetiradaExamesPage } from './retirada-exames.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RetiradaExamesPageRoutingModule
  ],
  declarations: [RetiradaExamesPage]
})
export class RetiradaExamesPageModule {}
