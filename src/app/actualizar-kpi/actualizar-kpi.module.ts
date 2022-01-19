import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualizarKpiPageRoutingModule } from './actualizar-kpi-routing.module';

import { ActualizarKpiPage } from './actualizar-kpi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualizarKpiPageRoutingModule
  ],
  declarations: [ActualizarKpiPage]
})
export class ActualizarKpiPageModule {}
