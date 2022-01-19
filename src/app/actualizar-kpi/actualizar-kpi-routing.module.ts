import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualizarKpiPage } from './actualizar-kpi.page';

const routes: Routes = [
  {
    path: '',
    component: ActualizarKpiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualizarKpiPageRoutingModule {}
