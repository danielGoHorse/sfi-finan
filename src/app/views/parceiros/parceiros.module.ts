import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParceirosPageRoutingModule } from './parceiros-routing.module';

import { ParceirosPage } from './parceiros.page';
import { ComponentsModule } from 'src/app/components/componets.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ParceirosPageRoutingModule
  ],
  declarations: [ParceirosPage]
})
export class ParceirosPageModule { }
