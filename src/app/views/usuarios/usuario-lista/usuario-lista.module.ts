import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioListaPageRoutingModule } from './usuario-lista-routing.module';

import { UsuarioListaPage } from './usuario-lista.page';
import { ComponentsModule } from 'src/app/components/componets.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    UsuarioListaPageRoutingModule
  ],
  declarations: [UsuarioListaPage]
})
export class UsuarioListaPageModule { }
