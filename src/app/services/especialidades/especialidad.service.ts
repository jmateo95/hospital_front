import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable } from "rxjs";
import { ExceptionHandlerApi } from "src/app/exception/exception";
import { environment } from "src/environments/environment";
import { Especialidad } from "./especialidad";

@Injectable({
    providedIn: 'root'
})

export class EspecialidadService extends ExceptionHandlerApi{
    private apiServerUrl = environment.apiBaseUrl+"/Especialidad";

    constructor(private http: HttpClient) {
        super()
     }

    public filterEspecialidad(name: string): Observable<Especialidad[]> {
        return this.http
            .get<Especialidad[]>(`${this.apiServerUrl}/findname/`+name).pipe(catchError(err => this.errorHandler(err,'ver')),);
    }


}