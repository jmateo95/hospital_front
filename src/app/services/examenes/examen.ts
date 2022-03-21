import { Cita } from "../cita/cita";
import { Doctor } from "../doctores/doctor";
import { Laboratorista } from "../laboratoristas/laboratorista";
import { Patient } from "../pacientes/Patient";
import { TipoExamen } from "../tipoExamenes/tipo-examen";


export class Examen {
    public fecha : Date;
    public hora : String;
    public paciente: Patient;
    public tipoExamen: TipoExamen;
    public doctor: Doctor;
    public laboratorista: Laboratorista;
    public cita: Cita;
    public ordenDoc: String;
    public informeDoc: String;

    constructor(){
        this.doctor = new Doctor();
        this.tipoExamen = new TipoExamen();
        this.paciente = new Patient();
        this.laboratorista = new Laboratorista();
        this.cita = new Cita();
    }

}