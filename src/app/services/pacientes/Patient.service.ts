import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from "rxjs";
import { Patient } from "./Patient";
import { environment } from "src/environments/environment";
import { ExceptionHandlerApi } from "../../exception/exception";


@Injectable({
    providedIn: 'root'
})

export class PatientService extends ExceptionHandlerApi{
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {
        super()
     }

    public getPatient(): Observable<Patient[]> {
        return this.http
            .get<Patient[]>(`${this.apiServerUrl}/paciente/all`).pipe(catchError(err => this.errorHandler(err,'ver')),);
    }

    public addPatient(Patient: Patient): Observable<Patient> {
        return this.http.post<Patient>(`${this.apiServerUrl}/paciente`, Patient).pipe(catchError(err => this.errorHandler(err,'registrar')),);
    }

    public updatePatient(Patient: Patient): Observable<Patient> {
        return this.http.put<Patient>(`${this.apiServerUrl}/Patient/update`, Patient);
    }

    public deletePatient(PatientId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/Patient/delete/${PatientId}`);
    }}