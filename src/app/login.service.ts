import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/dist/types/internal/Observable';
import { usuario } from './modelos/model';
import { ResponseI } from './modelos/responsivo';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public url="https://crudarq.herokuapp.com/api/"
  constructor(private http:HttpClient) {  }
  login(form: usuario ):Observable<ResponseI> {

    let url = this.url + "login";

    return this.http.post<ResponseI>(url,form)

    }
    get(){
     return this.http.get(this.url+"user")
    }
}
