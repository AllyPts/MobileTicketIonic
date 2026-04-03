import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SenhaPrioritariaPage } from './senha-prioritaria.page';

const routes: Routes = [
  {
    path: '',
    component: SenhaPrioritariaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SenhaPrioritariaPageRoutingModule {}
