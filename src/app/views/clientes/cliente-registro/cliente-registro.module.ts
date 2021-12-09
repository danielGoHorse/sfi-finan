import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienteRegistroPageRoutingModule } from './cliente-registro-routing.module';

import { ClienteRegistroPage } from './cliente-registro.page';
import { ComponentsModule } from 'src/app/components/componets.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    IonicModule,
    ClienteRegistroPageRoutingModule
  ],
  declarations: [ClienteRegistroPage]
})
export class ClienteRegistroPageModule { }
