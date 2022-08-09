import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private Http:HttpClient) { }
  obtenerDatos ():Observable<any>{
    console.log("el servicio portfolio esta corriendo")
    return this.Http.get('C:/Users/lizvi/OneDrive/Desktop/Portfolio/portfolio-FrontEndNV/src/assets/data/data.json')
  }
}
