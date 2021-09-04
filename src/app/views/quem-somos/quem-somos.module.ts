import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuemSomosPageRoutingModule } from './quem-somos-routing.module';

import { QuemSomosPage } from './quem-somos.page';
import { ComponentsModule } from 'src/app/components/componets.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    IonicModule,
    QuemSomosPageRoutingModule
  ],
  declarations: [QuemSomosPage]
})
export class QuemSomosPageModule { }
