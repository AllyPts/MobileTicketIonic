import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'senha-prioritaria',
    loadComponent: () => import('./pages/senha-prioritaria/senha-prioritaria.page').then(m => m.SenhaPrioritariaPage)
  },
  {
    path: 'senha-geral',
    loadComponent: () => import('./pages/senha-geral/senha-geral.page').then(m => m.SenhaGeralPage)
  },
  {
    path: 'retirada-exames',
    loadComponent: () => import('./pages/retirada-exames/retirada-exames.page').then(m => m.RetiradaExamesPage)
  },  {
    path: 'relatorios',
    loadChildren: () => import('./relatorios/relatorios.module').then( m => m.RelatoriosPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}