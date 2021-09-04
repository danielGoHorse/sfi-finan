import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteFinanciamentoPage } from './cliente-financiamento.page';

const routes: Routes = [
  {
    path: '',
    component: ClienteFinanciamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteFinanciamentoPageRoutingModule {}
