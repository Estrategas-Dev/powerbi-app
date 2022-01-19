import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-actualizar-kpi',
  templateUrl: './actualizar-kpi.page.html',
  styleUrls: ['./actualizar-kpi.page.scss'],
})
export class ActualizarKpiPage implements OnInit {

  constructor(
    private loadingCtrl: LoadingController,
    private router: Router
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

}
