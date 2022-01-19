import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Storage } from '@capacitor/storage';
import { LoadingController, MenuController } from '@ionic/angular';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  url: SafeResourceUrl;
  nombre: string;
  rol: string;
  administrador: boolean = false;
  kpis: any
  totalKpis: number = 0;
  sinKpis: boolean = false;

  public appPages = [
    {
      title: 'Cerrar sesión',
      icon: 'log-out'
    },
    {
      title: 'Administrar URL',
      icon: 'globe'
    }
    // { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    // { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    // { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    // { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    // { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];

  constructor(
    private domSanitizer: DomSanitizer,
    private router: Router,
    private menuCtrl: MenuController,
    private loadingCtrl: LoadingController,
    private rest: RestService
  ) { }

  ngOnInit() {
    this.obtenerInfoUsuario();
    this.getKpis();
  }

  ionViewWillEnter() {
    this.obtenerInfoUsuario();
    this.getKpis();
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  obtenerInfoUsuario() {

    Storage.get({
      key: 'Nombre'
    }).then(value => {
      if (value) {
        console.log(value);
        this.nombre = value.value;
      } else {
        console.log("No se obtuvo el nombre del storage");
      }
    })

    Storage.get({
      key: 'Rol'
    }).then(value => {
      if (value) {
        console.log(value);
        this.rol = value.value;
        if (value.value === "Administrador") {
          this.administrador = true;
        } else {
          this.administrador = false;
        }
        console.log(this.administrador);
      } else {
        console.log("No se obtuvo el rol del storage");
      }
    })


  }


  async getKpis() {

    const loading = await this.loadingCtrl.create({
      message: 'Mostrando kpis',
      spinner: 'dots'
    })

    await loading.present();

    this.kpis = await this.rest.getKpi();

    console.log(this.kpis);
    
    this.totalKpis = this.kpis.length;

    if(this.totalKpis == 0) {
      this.sinKpis = true;
    } else {
      this.sinKpis = false;
    }

    loading.dismiss();
  }

  logout() {
    Storage.remove({
      key: 'Email'
    }).then(() => {
      console.log('Removido el email del storage');
      this.router.navigateByUrl('login');
    })
  };


  async admin() {
    const loading = await this.loadingCtrl.create({
      message: 'Abriendo panel de administración...',
      spinner: 'dots'
    });

    await loading.present();

    setTimeout(() => {
      loading.dismiss();
      this.router.navigateByUrl('administracion');
    }, 1500);

  }

  mostrarKpi(url: string) {
    console.log(url);
    this.router.navigate(['kpi-view', url]);
  }

}
