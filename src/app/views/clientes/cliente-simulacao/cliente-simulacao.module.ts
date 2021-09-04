import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienteSimulacaoPageRoutingModule } from './cliente-simulacao-routing.module';

import { ClienteSimulacaoPage } from './cliente-simulacao.page';
import { ComponentsModule } from 'src/app/components/componets.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ClienteSimulacaoPageRoutingModule
  ],
  declarations: [ClienteSimulacaoPage]
})
export class ClienteSimulacaoPageModule { }
