import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SenhaGeralPage } from './senha-geral.page';

const routes: Routes = [
  {
    path: '',
    component: SenhaGeralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SenhaGeralPageRoutingModule {}
