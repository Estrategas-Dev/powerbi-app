import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Storage } from '@capacitor/storage';
import { RestService } from '../services/rest.service';
import { Usuario } from '../interfaces/Usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';
  usuarioRespuesta: any;

  errorBlancos: boolean = false;
  errorIncorrectos: boolean = false;
  errorNoExiste: boolean = false;

  loading: any;

  key: string = '';
  value: string = '';

  constructor(
    private loadingCtrl: LoadingController,
    private router: Router,
    private rest: RestService
  ) { }

  ngOnInit() {
    this.getStorage();
  }


  async login() {

    // Validar si se ingreso informacion
    if (this.email === '' || this.password === '') {
      this.errorBlancos = true
      return;
    } else {
      this.errorBlancos = false;
    }

     // Validar la informacion con la base de datos
    this.usuarioRespuesta = await this.rest.loginSQlServer(this.email, this.password);

    console.log(this.usuarioRespuesta);
    if (this.usuarioRespuesta.length > 0) {
      // Verificar que el password sea correcto
      console.log("Si existe el usuario");
      if (this.usuarioRespuesta[0].password === this.password) {
        console.log("Enviar a principal");
        this.errorIncorrectos = false;
        let nombre = this.usuarioRespuesta[0].nombre;
        let rol = this.usuarioRespuesta[0].rol;
        this.save(nombre, rol);
        this.router.navigateByUrl('principal');
      } else {
        this.errorIncorrectos = true;
        this.errorNoExiste = false;
        return;
      }
    } else {
      this.errorNoExiste = true
      return;
    }

  }

  save(nombre: string, rol: string) {
    console.log("Guardando " + nombre + " en el storage");
    Storage.set(
      { key: 'Email', value: this.email }
    ).then(() => console.log('saved' + this.email))
    Storage.set(
      { key: 'Nombre', value: nombre }
    ).then(() => console.log('saved' + nombre))
    Storage.set(
      { key: 'Rol', value: rol }
    ).then(() => console.log('saved ' + rol))
  }

  getStorage() {
    Storage.get({
      key: 'Email'
    }).then(value => {
      if (value) {
        console.log("Si hay sesion activa");
      } else {
        console.log("No hay sesion activa");
      }
    })
  }

}
