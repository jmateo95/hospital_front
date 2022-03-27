import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ExceptionHandlerApi } from 'src/app/exception/exception';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadDoctorService extends ExceptionHandlerApi{
  private API_SERVER="http://localhost:8080/DoctorEspecialidad";

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
      return this.httpClient.get("http://localhost:8080/DoctorEspecialidad/find/doctors/" + doctor + "/" + especialidad);
    } else {
      return this.httpClient.get("http://localhost:8080/Especialidad/findname/" + especialidad).pipe(catchError(err => this.errorHandler(err, 'ver')),)
    }
  }

}
