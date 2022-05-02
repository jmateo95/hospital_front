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
            .get(`${this.apiServerUrl}`).pipe();
    }

    public getCita(id: any):Observable<any> {
        return this.http
            .get(this.apiServerUrl+"/"+id).pipe();
    }

    public addCita(cita: any): Observable<any> {
        return this.http.post<any>(`${this.apiServerUrl}`, cita).pipe();
    }

    public updatePatient(cita: any): Observable<Cita> {
        return this.http.put<any>(`${this.apiServerUrl}/Patient/update`, cita);
    }

    public deletePatient(citaId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/Patient/delete/${citaId}`);
    }
    public getUpcomingCitas(id:any, page:any):Observable<any> {
        return this.http.get(this.apiServerUrl+'/filter/upcoming/'+id+'?page='+page).pipe();
    }

    public getWeekCitas(id:any, semana:any):Observable<any> {
        return this.http.get(this.apiServerUrl+'/filter/week/'+id+'/'+semana).pipe();
    }

    public getRecordCitas(id:any,page:any):Observable<any> {
        return this.http.get(this.apiServerUrl+'/filter/records/'+id+'?page='+page).pipe();
    }

    public filterCitasDate(id:any,start:any,end:any,page:any):Observable<any> {
        return this.http.get(this.apiServerUrl+'/filter/date/patient/'+id+'/'+start+'/'+end+'?page='+page).pipe();
    }
    public filterCitasDateDoctor(id:any,start:any,end:any,doctor:any,page:any):Observable<any> {
        return this.http.get(this.apiServerUrl+'/filter/date/patient/doctor/'+id+'/'+start+'/'+end+'/'+doctor+'?page='+page).pipe();
    }

    public filterCitasDoctorUpcoming(id:any,doctor:any,page:any):Observable<any> {
        return this.http.get(this.apiServerUrl+'/filter/upcoming/patient/doctor/'+id+'/'+doctor+'?page='+page).pipe();
    }

    public filterCitasDoctorRecord(id:any,doctor:any,page:any):Observable<any> {
        return this.http.get(this.apiServerUrl+'/filter/record/patient/doctor/'+id+'/'+doctor+'?page='+page).pipe();
    }


    public countUpcomingCitas(id:any):Observable<any> {
        return this.http.get(this.apiServerUrl+'/count/upcoming/'+id).pipe();
    }
    public countRecordCitas(id:any):Observable<any> {
        return this.http.get(this.apiServerUrl+'/count/records/'+id).pipe();
    }

    public countfilterCitasDate(id:any,start:any,end:any):Observable<any> {
        return this.http.get(this.apiServerUrl+'/count/date/patient/'+id+'/'+start+'/'+end).pipe();
    }
    public countfilterCitasDateDoctor(id:any,start:any,end:any,doctor:any):Observable<any> {
        return this.http.get(this.apiServerUrl+'/count/date/patient/doctor/'+id+'/'+start+'/'+end+'/'+doctor).pipe();
    }

    public countfilterCitasDoctorUpcoming(id:any,doctor:any):Observable<any> {
        return this.http.get(this.apiServerUrl+'/count/upcoming/patient/doctor/'+id+'/'+doctor).pipe();
    }

    public countfilterCitasDoctorRecord(id:any,doctor:any):Observable<any> {
        return this.http.get(this.apiServerUrl+'/count/record/patient/doctor/'+id+'/'+doctor).pipe();
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

    public getDoctorCosto(start:any,end:any): Observable<any>{        
        return this.http.get<any>(`${this.apiServerUrl}/doctorcosto/${start}/${end}`);
    }

}