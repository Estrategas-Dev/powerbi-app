import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KpiViewPageRoutingModule } from './kpi-view-routing.module';

import { KpiViewPage } from './kpi-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KpiViewPageRoutingModule
  ],
  declarations: [KpiViewPage]
})
export class KpiViewPageModule {}
