import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  { path: '', component: Tab1Page },
  {
    path: 'senha-prioritaria',
    loadComponent: () => import('../pages/senha-prioritaria/senha-prioritaria.page').then(m => m.SenhaPrioritariaPage)
  },
  {
    path: 'senha-geral',
    loadComponent: () => import('../pages/senha-geral/senha-geral.page').then(m => m.SenhaGeralPage)
  },
  {
    path: 'retirada-exames',
    loadComponent: () => import('../pages/retirada-exames/retirada-exames.page').then(m => m.RetiradaExamesPage)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}