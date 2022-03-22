import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadDoctorService {
  private API_SERVER="http://localhost:8080/DoctorEspecialidad";

  constructor(
    private httpClient: HttpClient,
  ) { }


  public saveEspecialidadDoctor(especialidad_doctor:any): Observable<any>{
    return this.httpClient.post(this.API_SERVER,especialidad_doctor);
  }

  public findDoctor(id:any):Observable<any>{
    return this.httpClient.get(this.API_SERVER+"/finddoctor/"+id);
  }


  public deleteEspecialidadDoctor(id:any):Observable<any>{
    return this.httpClient.delete(this.API_SERVER+"/"+id);
  }

}
