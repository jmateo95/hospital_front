import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { ExceptionHandlerApi } from 'src/app/exception/exception';
import { EspecialidadDoctorService } from '../especialidad_doctor/especialidad-doctor.service';

@Injectable({
  providedIn: 'root'
})


export class DoctorService extends ExceptionHandlerApi {
  private API_SERVER = "http://localhost:8080/Doctor";
  constructor(
    private httpClient: HttpClient,
    private especialidadDoctor: EspecialidadDoctorService
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
    if (especialidad != -1) {
      if (doctor == "") {
        doctor = "%20";
      }
      return this.httpClient.get("http://localhost:8080/DoctorEspecialidad" + "/find/speciality/" + especialidad + "/" + doctor);
    } else {
      return this.httpClient.get(`${this.API_SERVER}/findname/` + doctor).pipe(catchError(err => this.errorHandler(err, 'ver')),)
    }

  }
}
