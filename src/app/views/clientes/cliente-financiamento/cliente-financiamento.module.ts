import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienteFinanciamentoPageRoutingModule } from './cliente-financiamento-routing.module';

import { ClienteFinanciamentoPage } from './cliente-financiamento.page';
import { ComponentsModule } from 'src/app/components/componets.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    IonicModule,
    ClienteFinanciamentoPageRoutingModule
  ],
  declarations: [ClienteFinanciamentoPage]
})
export class ClienteFinanciamentoPageModule { }
