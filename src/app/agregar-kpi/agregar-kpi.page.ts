import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-agregar-kpi',
  templateUrl: './agregar-kpi.page.html',
  styleUrls: ['./agregar-kpi.page.scss'],
})
export class AgregarKpiPage implements OnInit {

  titulo: string = '';
  descripcion: string = '';
  url: string = '';


  constructor(
    private loadingCtrl: LoadingController,
    private router: Router,
    private alrtCtrl: AlertController,
    private rest: RestService
  ) { }

  ngOnInit() {
  }


  async regresar() {
    const loading = await this.loadingCtrl.create({
      message: 'Regresar a panel de administración...',
      spinner: 'dots'
    });

    await loading.present();

    setTimeout(() => {
      loading.dismiss();
      this.router.navigateByUrl('administracion');
    }, 1000);

  }


  async guardar() {
    if(this.url === '' || this.titulo === '' || this.descripcion === '' ) {
      const alert = await this.alrtCtrl.create({
        message: 'Todos los campos son obligatorios',
        header: 'Error',
        buttons: ['OK']
      });
      await alert.present();
      return;
    } else {
      // Guardar en la base
      let respuesta = await this.rest.guardarKpi(this.titulo, this.descripcion, this.url);
      const alert = await this.alrtCtrl.create({
        message: 'Kpi agregado con éxito',
        header: 'Éxito',
        buttons: ['OK']
      });
      await alert.present();
      this.router.navigateByUrl('administracion');
    }
  }

}
