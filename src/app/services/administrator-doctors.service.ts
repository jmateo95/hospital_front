import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdministratorDoctorsService {

  constructor(private http: HttpClient) {
    console.log("Servicio http administrador-doctor")
  }

  getUsers(){
    return this.http.get<any>('http://localhost:8080/usuario?page=0&size=10&enablePagination=false')
  }

  createDoctor(data: any){
    return this.http.post("http://localhost:8080/Doctor", data);
  }

}
