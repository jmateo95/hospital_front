import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AdministratorDoctorsService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
    console.log("Servicio http administrador-doctor")
  }

  getUsers(){
    return this.http.get<any>(this.apiServerUrl+'/usuario?page=0&size=10&enablePagination=false')
  }

  createDoctor(data: any){
    return this.http.post(this.apiServerUrl+"/Doctor", data);
  }

}
