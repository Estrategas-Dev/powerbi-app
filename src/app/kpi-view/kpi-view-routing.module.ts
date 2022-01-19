import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KpiViewPage } from './kpi-view.page';

const routes: Routes = [
  {
    path: '',
    component: KpiViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KpiViewPageRoutingModule {}
