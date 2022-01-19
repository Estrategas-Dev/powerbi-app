import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'administracion',
    loadChildren: () => import('./administracion/administracion.module').then( m => m.AdministracionPageModule)
  },
  {
    path: 'actualizar-kpi',
    loadChildren: () => import('./actualizar-kpi/actualizar-kpi.module').then( m => m.ActualizarKpiPageModule)
  },
  {
    path: 'agregar-kpi',
    loadChildren: () => import('./agregar-kpi/agregar-kpi.module').then( m => m.AgregarKpiPageModule)
  },
  {
    path: 'kpi-view/:url',
    loadChildren: () => import('./kpi-view/kpi-view.module').then( m => m.KpiViewPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
