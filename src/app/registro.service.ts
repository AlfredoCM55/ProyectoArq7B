import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/dist/types/internal/Observable';
import { putusuarioI } from './modelos/esqueleto';
import { ResponseI } from './modelos/responsivo';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  public url="https://crudarq.herokuapp.com/api/"
  constructor(private http:HttpClient) {  }
  registrar(from: putusuarioI):Observable<ResponseI> {

    let url = this.url + "registro";

    return this.http.post<ResponseI>(url,from)

    }
}
