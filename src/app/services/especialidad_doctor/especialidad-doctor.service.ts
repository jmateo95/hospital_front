import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ExceptionHandlerApi } from 'src/app/exception/exception';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EspecialidadDoctorService extends ExceptionHandlerApi{
  private API_SERVER = environment.apiBaseUrl+"/DoctorEspecialidad";
  private API_SERVER1 = environment.apiBaseUrl;

  constructor(
    private httpClient: HttpClient,
  ) {
    super()
   }


  public saveEspecialidadDoctor(especialidad_doctor:any): Observable<any>{
    return this.httpClient.post(this.API_SERVER,especialidad_doctor);
  }

  public findDoctor(id:any):Observable<any>{
    return this.httpClient.get(this.API_SERVER+"/finddoctor/"+id);
  }


  public deleteEspecialidadDoctor(id:any):Observable<any>{
    return this.httpClient.delete(this.API_SERVER+"/"+id);
  }

  public findDoctoresEspecialidad(doctor:any, especialidad:any):Observable<any>{
    if (doctor != -1) {
      if (especialidad == "") {
        especialidad = "%20";
      }
      return this.httpClient.get(this.API_SERVER+"/find/doctors/" + doctor + "/" + especialidad);
    } else {
      return this.httpClient.get(this.API_SERVER1+"/Especialidad/findname/" + especialidad).pipe(catchError(err => this.errorHandler(err, 'ver')),)
    }
  }

  public finddoctorsByEspecialidad(id:any,page:any):Observable<any>{
    return this.httpClient.get(this.API_SERVER+"/find/specialityP/"+id+"?page="+page);
  }

  public countDoctorByEspecialidad(id:any):Observable<any>{
    return this.httpClient.get(this.API_SERVER+"/find/specialityCount/"+id)
  }

}
