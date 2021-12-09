import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteSimulacaoPage } from './cliente-simulacao.page';

const routes: Routes = [
  {
    path: '',
    component: ClienteSimulacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteSimulacaoPageRoutingModule {}
