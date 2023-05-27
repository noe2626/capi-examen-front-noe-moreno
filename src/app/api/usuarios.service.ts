import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  url:string = environment.API+'users'

  constructor(private http:HttpClient) { }

  getUsuarios(){
    return this.http.get(this.url);
  }

}
