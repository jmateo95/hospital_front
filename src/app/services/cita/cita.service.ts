import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from "rxjs";
import { Cita } from "./cita";
import { environment } from "src/environments/environment";
import { ExceptionHandlerApi } from "../../exception/exception";


@Injectable({
    providedIn: 'root'
})

export class CitaService extends ExceptionHandlerApi{
    private apiServerUrl = environment.apiBaseUrl+"/Cita";

    constructor(private http: HttpClient) {
        super()
     }

    public getCitas(): Observable<Cita[]> {
        return this.http
            .get<Cita[]>(`${this.apiServerUrl}/all`).pipe(catchError(err => this.errorHandler(err,'ver')),);
    }

    public addCita(cita: Cita): Observable<Cita> {
        return this.http.post<Cita>(`${this.apiServerUrl}/paciente`, cita).pipe(catchError(err => this.errorHandler(err,'registrar')),);
    }

    public updatePatient(cita: Cita): Observable<Cita> {
        return this.http.put<Cita>(`${this.apiServerUrl}/Patient/update`, cita);
    }

    public deletePatient(citaId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/Patient/delete/${citaId}`);
    }

    public getTodayDoctorAppoiment(DoctorId: number): Observable<any>{
        return this.http.get<any>(`${this.apiServerUrl}/today/${DoctorId}`);
    }    
}