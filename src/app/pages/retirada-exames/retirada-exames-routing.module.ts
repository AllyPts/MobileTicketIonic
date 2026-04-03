import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RetiradaExamesPage } from './retirada-exames.page';

const routes: Routes = [
  {
    path: '',
    component: RetiradaExamesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RetiradaExamesPageRoutingModule {}
