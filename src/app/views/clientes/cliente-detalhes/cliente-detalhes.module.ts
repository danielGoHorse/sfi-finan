import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienteDetalhesPageRoutingModule } from './cliente-detalhes-routing.module';

import { ClienteDetalhesPage } from './cliente-detalhes.page';
import { ComponentsModule } from 'src/app/components/componets.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ClienteDetalhesPageRoutingModule
  ],
  declarations: [ClienteDetalhesPage]
})
export class ClienteDetalhesPageModule { }
