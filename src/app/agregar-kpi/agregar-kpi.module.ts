import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarKpiPageRoutingModule } from './agregar-kpi-routing.module';

import { AgregarKpiPage } from './agregar-kpi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarKpiPageRoutingModule
  ],
  declarations: [AgregarKpiPage]
})
export class AgregarKpiPageModule {}
