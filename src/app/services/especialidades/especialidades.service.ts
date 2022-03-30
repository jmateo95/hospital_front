
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

  private API_SERVER = environment.apiBaseUrl+"/Especialidad";
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
      return this.httpClient.get(`http://localhost:8080/DoctorEspecialidad/find/doctors/${doctor}/${especialidad}`).pipe(catchError(err => this.errorHandler(err, 'ver')),);
    } else {
      especialidad = encodeURIComponent(especialidad)
      return this.httpClient.get(`http://localhost:8080/Especialidad/findname/${especialidad}`).pipe(catchError(err => this.errorHandler(err, 'ver')),)
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

   public getEspecialidades(): Observable<any> {
    return this.httpClient
      .get(this.API_SERVER).pipe(catchError(err => this.errorHandler(err, 'ver')),);
  }

  public getEspecialidad(id: any): Observable<any> {
    return this.httpClient
      .get(this.API_SERVER + '/' + id).pipe(catchError(err => this.errorHandler(err, 'ver')),);
  }

}
