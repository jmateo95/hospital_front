
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { ExceptionHandlerApi } from 'src/app/exception/exception';
import { Especialidad } from './especialidad';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EspecialidadesService extends ExceptionHandlerApi {

  private API_SERVER = environment.MicroEntities+"/Especialidad";
  private API_SERVER1 = environment.MicroEntities;
  constructor(
    private httpClient: HttpClient) {
    super()

  }


  public getAllEspecialidad(): Observable<any> {
    return this.httpClient.get(this.API_SERVER);
  }


  public saveEspecialidad(especialidad: any): Observable<any> {
    return this.httpClient.post(this.API_SERVER, especialidad);
  }



  public filterEspecialidad(doctor: any, especialidad: any): Observable<any> {
    if (doctor != null) {
      if (especialidad == "") {
        especialidad = "%20";
      }else{
        especialidad = encodeURIComponent(especialidad)
      }
      return this.httpClient.get(`${this.API_SERVER1}/DoctorEspecialidad/find/doctors/${doctor}/${especialidad}`).pipe();
    } else {
      especialidad = encodeURIComponent(especialidad)
      return this.httpClient.get(`${this.API_SERVER1}/Especialidad/findname/${especialidad}`).pipe()
    }
  }
  

  public getEspecialidadId(id:any):Observable<any>{
    return this.httpClient.get(this.API_SERVER+"/"+id);
  }

  public editEspecialidad(especialidad:any):Observable<any>{
    return this.httpClient.put(this.API_SERVER, especialidad)
  }

  public deleteEspecialidad(id:any):Observable<any>{
    return this.httpClient.delete(this.API_SERVER+"/"+id);
  }

   public getEspecialidades(page:any): Observable<any> {
    return this.httpClient
      .get(this.API_SERVER+"?page="+page+"&size=6&enablePagination=true").pipe();
  }

  public getEspecialidad(id: any): Observable<any> {
    return this.httpClient
      .get(this.API_SERVER + '/' + id).pipe();
  }


  public countAll(): Observable<any> {
    return this.httpClient.get(this.API_SERVER+"/count");
  }



  public filter(especialidad:any,cost:any,page:any): Observable<any>{
    if (especialidad!="" && cost!="") {
      return this.httpClient
      .get(this.API_SERVER+"/filterbynameandcost/"+especialidad+"/"+cost).pipe();
    }else if(especialidad!=""){
      return this.httpClient
      .get(this.API_SERVER+"/filterbyname/"+especialidad).pipe();
    }else if(cost!=""){
      return this.httpClient
      .get(this.API_SERVER+"/filterbycost/"+cost).pipe();
    }else{
      return this.httpClient
      .get(this.API_SERVER+"?page="+page+"&size=6&enablePagination=true").pipe();
    }
  }

  public count(especialidad:any,cost:any): Observable<any>{
    if (especialidad!="" && cost!="") {
      return this.httpClient
      .get(this.API_SERVER+"/count/filterbynameandcost/"+especialidad+"/"+cost).pipe();
    }else if(especialidad!=""){
      return this.httpClient
      .get(this.API_SERVER+"/count/filterbyname/"+especialidad).pipe();
    }else  if(cost!=""){
      return this.httpClient
      .get(this.API_SERVER+"/count/filterbycost/"+cost).pipe();
    }else{
      return this.httpClient.get(this.API_SERVER+"/count");
    }
  }

}
