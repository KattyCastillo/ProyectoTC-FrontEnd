import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { TarjetaCredito } from '../models/TarjetaCredito';

@Injectable({
  providedIn: 'root'
})

export class TarjetaService {
  myAppUrl = 'https://localhost:44357/';
  myApiUrl = 'api/TrajetaCredito/'
  list!: TarjetaCredito[];
  private actualizarFormulario = new BehaviorSubject<TarjetaCredito>({} as any);

  constructor(private http: HttpClient) { }

  guardarTarjeta(tarjeta: TarjetaCredito):Observable<TarjetaCredito>{
    return this.http.post<TarjetaCredito>(this.myAppUrl + this.myApiUrl, tarjeta);
  }

  eliminarTarjetas(id: number): Observable<TarjetaCredito>{
    return this.http.delete<TarjetaCredito>(this.myAppUrl + this.myApiUrl + id);
  }

  obtenerTarjetas(){
    this.http.get(this.myAppUrl + this.myApiUrl,).toPromise()
    .then(data => {
      this.list = data as TarjetaCredito[];
    });
  }

  actualizarTarjeta(id: number, tarjeta: TarjetaCredito):Observable<TarjetaCredito>{
   return this.http.put<TarjetaCredito>(this.myAppUrl + this.myApiUrl + id, tarjeta);
  }

  actualizar(tarjeta: TarjetaCredito){
    this.actualizarFormulario.next(tarjeta);
  }

  obtenerTarjeta():Observable<TarjetaCredito>{
    return this.actualizarFormulario.asObservable();
  }
 
}
