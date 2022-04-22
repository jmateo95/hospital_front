import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, Observable } from "rxjs";
import { Cita } from "./cita";
import { environment } from "src/environments/environment";
import { ExceptionHandlerApi } from "../../exception/exception";


@Injectable({
    providedIn: 'root'
})

export class CitaService extends ExceptionHandlerApi{

    private apiServerUrl = environment.MicroCita+"/Cita";

    constructor(private http: HttpClient) {
        super()
     }

    public getCitas():Observable<any> {
        return this.http
            .get(`${this.apiServerUrl}`).pipe(catchError(err => this.errorHandler(err,'ver')),);
    }

    public getCita(id: any):Observable<any> {
        return this.http
            .get(this.apiServerUrl+"/"+id).pipe(catchError(err => this.errorHandler(err,'ver')),);
    }

    public addCita(cita: any): Observable<any> {
        return this.http.post<any>(`${this.apiServerUrl}`, cita).pipe(catchError(err => this.errorHandler(err,'registrar')),);
    }

    public updatePatient(cita: Cita): Observable<Cita> {
        return this.http.put<Cita>(`${this.apiServerUrl}/Patient/update`, cita);
    }

    public deletePatient(citaId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/Patient/delete/${citaId}`);
    }
    public getUpcomingCitas(id:any, page:any):Observable<any> {
        return this.http.get(this.apiServerUrl+'/filter/upcoming/'+id+'?page='+page).pipe(catchError(err => this.errorHandler(err,'ver')),);
    }

    public getWeekCitas(id:any, semana:any):Observable<any> {
        return this.http.get(this.apiServerUrl+'/filter/week/'+id+'/'+semana).pipe(catchError(err => this.errorHandler(err,'ver')),);
    }

    public getRecordCitas(id:any,page:any):Observable<any> {
        return this.http.get(this.apiServerUrl+'/filter/records/'+id+'?page='+page).pipe(catchError(err => this.errorHandler(err,'ver')),);
    }

    public filterCitasDate(id:any,start:any,end:any,page:any):Observable<any> {
        return this.http.get(this.apiServerUrl+'/filter/date/patient/'+id+'/'+start+'/'+end+'?page='+page).pipe(catchError(err => this.errorHandler(err,'ver')),);
    }
    public filterCitasDateDoctor(id:any,start:any,end:any,doctor:any,page:any):Observable<any> {
        return this.http.get(this.apiServerUrl+'/filter/date/patient/doctor/'+id+'/'+start+'/'+end+'/'+doctor+'?page='+page).pipe(catchError(err => this.errorHandler(err,'ver')),);
    }

    public filterCitasDoctorUpcoming(id:any,doctor:any,page:any):Observable<any> {
        return this.http.get(this.apiServerUrl+'/filter/upcoming/patient/doctor/'+id+'/'+doctor+'?page='+page).pipe(catchError(err => this.errorHandler(err,'ver')),);
    }

    public filterCitasDoctorRecord(id:any,doctor:any,page:any):Observable<any> {
        return this.http.get(this.apiServerUrl+'/filter/record/patient/doctor/'+id+'/'+doctor+'?page='+page).pipe(catchError(err => this.errorHandler(err,'ver')),);
    }


    public countUpcomingCitas(id:any):Observable<any> {
        return this.http.get(this.apiServerUrl+'/count/upcoming/'+id).pipe(catchError(err => this.errorHandler(err,'ver')),);
    }
    public countRecordCitas(id:any):Observable<any> {
        return this.http.get(this.apiServerUrl+'/count/records/'+id).pipe(catchError(err => this.errorHandler(err,'ver')),);
    }

    public countfilterCitasDate(id:any,start:any,end:any):Observable<any> {
        return this.http.get(this.apiServerUrl+'/count/date/patient/'+id+'/'+start+'/'+end).pipe(catchError(err => this.errorHandler(err,'ver')),);
    }
    public countfilterCitasDateDoctor(id:any,start:any,end:any,doctor:any):Observable<any> {
        return this.http.get(this.apiServerUrl+'/count/date/patient/doctor/'+id+'/'+start+'/'+end+'/'+doctor).pipe(catchError(err => this.errorHandler(err,'ver')),);
    }

    public countfilterCitasDoctorUpcoming(id:any,doctor:any):Observable<any> {
        return this.http.get(this.apiServerUrl+'/count/upcoming/patient/doctor/'+id+'/'+doctor).pipe(catchError(err => this.errorHandler(err,'ver')),);
    }

    public countfilterCitasDoctorRecord(id:any,doctor:any):Observable<any> {
        return this.http.get(this.apiServerUrl+'/count/record/patient/doctor/'+id+'/'+doctor).pipe(catchError(err => this.errorHandler(err,'ver')),);
    }

    public getTodayDoctorAppoiment(DoctorId: number): Observable<any>{        
        return this.http.get<any>(`${this.apiServerUrl}/today/${DoctorId}`);
    }


    public getCitaDoctor(ASC: boolean, start:any,end:any): Observable<any>{        
        return this.http.get<any>(`${this.apiServerUrl}/citadoctor/${ASC}/${start}/${end}`);
    }


    public getPacientesCosto(start:any,end:any): Observable<any>{        
        return this.http.get<any>(`${this.apiServerUrl}/pacientecosto/${start}/${end}`);
    }

}