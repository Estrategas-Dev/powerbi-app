import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarKpiPage } from './agregar-kpi.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarKpiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarKpiPageRoutingModule {}
