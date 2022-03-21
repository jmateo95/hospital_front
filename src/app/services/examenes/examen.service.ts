import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from "rxjs";
import { Examen } from "./examen";
import { environment } from "src/environments/environment";
import { ExceptionHandlerApi } from "../../exception/exception";


@Injectable({
    providedIn: 'root'
})

export class ExamenService extends ExceptionHandlerApi{
    private apiServerUrl = environment.apiBaseUrl+"/Examen";

    constructor(private http: HttpClient) {
        super()
     }

    public getExamenes():Observable<any> {
        return this.http
            .get(`${this.apiServerUrl}`).pipe(catchError(err => this.errorHandler(err,'ver')),);
    }

    public getExamen(id: any):Observable<any> {
        console.log(this.apiServerUrl+"/"+id)
        return this.http
            .get(this.apiServerUrl+"/"+id).pipe(catchError(err => this.errorHandler(err,'ver')),);
    }

    public addExamen(examen: Examen): Observable<Examen> {
        return this.http.post<Examen>(`${this.apiServerUrl}`, examen).pipe(catchError(err => this.errorHandler(err,'registrar')),);
    }

    public updatePatient(examen: Examen): Observable<Examen> {
        return this.http.put<Examen>(`${this.apiServerUrl}/Patient/update`, examen);
    }

    public deletePatient(examenId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/Patient/delete/${examenId}`);
    }

}