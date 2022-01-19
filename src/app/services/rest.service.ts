import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/Usuario';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  apiUrlLogin = 'https://implementta.net/andro/ImplementtaEndPoints.aspx?query=sp_loginAppPowerBi';
  apiUrlKpi = 'https://implementta.net/andro/ImplementtaEndPoints.aspx?query=sp_getKpi'
  apiSetKpi = 'https://implementta.net/andro/ImplementtaEndPoints.aspx?query=sp_setKpi'

  constructor(
    private http: HttpClient
  ) { }




  loginSQlServer(email: string, password: string){
    console.log(email, password);
    let usuarioRespuesta: Usuario[];
    return new Promise(resolve => {
      this.http.get(this.apiUrlLogin + " '" + email + "'").subscribe((data:any) => {
        usuarioRespuesta = data
        resolve(data)
      })
    }).catch(error => console.log(error))

  }

  getKpi() {
    return new Promise(resolve => {
      this.http.get(this.apiUrlKpi).subscribe(data => {
        resolve(data);
      })
    }).catch(error => console.log(error));
  }


  guardarKpi(titulo: string, descripcion: string, url: string) {
    try {
      let urlTerminada = `${this.apiSetKpi} '${titulo}', '${descripcion}', '${url}'`;
      console.log(urlTerminada);
      this.http.post(urlTerminada, null).subscribe(data => {
        console.log(data);
        return Promise.resolve("Se agrego con éxito el kpi");
      })
    } catch(error) {
      console.log(error);
    }

  }

}
