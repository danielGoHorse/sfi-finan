import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioRegistroPageRoutingModule } from './usuario-registro-routing.module';

import { UsuarioRegistroPage } from './usuario-registro.page';
import { ComponentsModule } from 'src/app/components/componets.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    IonicModule,
    UsuarioRegistroPageRoutingModule
  ],
  declarations: [UsuarioRegistroPage]
})
export class UsuarioRegistroPageModule { }
