import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { ExceptionHandlerApi } from 'src/app/exception/exception';
import { EspecialidadDoctorService } from '../especialidad_doctor/especialidad-doctor.service';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})


export class DoctorService extends ExceptionHandlerApi {
  private API_SERVER = environment.apiBaseUrl+"/Doctor";
  constructor(
    private httpClient: HttpClient,
  ) {
    super()
  }

  public getAllDoctor(): Observable<any> {
    return this.httpClient.get(this.API_SERVER);
  }

  public saveDoctor(doctor: any): Observable<any> {
    return this.httpClient.post(this.API_SERVER, doctor);
  }

  public getDoctorId(id: any): Observable<any> {
    return this.httpClient.get(this.API_SERVER + "/" + id);
  }

  public editDoctor(doctor: any): Observable<any> {
    return this.httpClient.put(this.API_SERVER, doctor)
  }

  public filterDoctor(doctor: any, especialidad: any): Observable<any> {
    console.log(especialidad)
    if (especialidad != null) {
      if (doctor == "") {
        doctor = "%20";
      }else{
        doctor = encodeURIComponent(doctor)
      }
      return this.httpClient.get(this.API_SERVER+"Especialidad" + "/find/speciality/" + especialidad + "/" + doctor);
    } else {
      doctor = encodeURIComponent(doctor)
      return this.httpClient.get(`${this.API_SERVER}/findname/` + doctor).pipe(catchError(err => this.errorHandler(err, 'ver')),)
    }

  }
}
