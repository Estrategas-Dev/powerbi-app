import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, MenuController } from '@ionic/angular';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.page.html',
  styleUrls: ['./administracion.page.scss'],
})
export class AdministracionPage implements OnInit {

  constructor(
    private menuCtrl: MenuController,
    private loadingCtrl: LoadingController,
    private router: Router,
    private rest: RestService
  ) { }

  kpis: any;

  ngOnInit() {
  }


  toggleMenu() {
    this.menuCtrl.toggle();
  }


  async regresar() {
    const loading = await this.loadingCtrl.create({
      message: 'Regresar a principal...',
      spinner: 'dots'
    });

    await loading.present();

    setTimeout(() => {
      loading.dismiss();
      this.router.navigateByUrl('principal');
    }, 1000);

  }


  async modificar() {
    const loading = await this.loadingCtrl.create({
      message: 'Abriendo panel de modificación',
      spinner: 'dots'
    });

    await loading.present();

    setTimeout(() => {
      loading.dismiss();
      this.router.navigateByUrl('actualizar-kpi');
    }, 1000);

  }

  async agregar() {
    const loading = await this.loadingCtrl.create({
      message: 'Abriendo panel de agregar',
      spinner: 'dots'
    });

    await loading.present();

    setTimeout(() => {
      loading.dismiss();
      this.router.navigateByUrl('agregar-kpi');
    }, 1000);

  }


}
