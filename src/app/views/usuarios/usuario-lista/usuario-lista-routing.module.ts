import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioListaPage } from './usuario-lista.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioListaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioListaPageRoutingModule {}
