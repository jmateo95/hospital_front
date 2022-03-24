import { Cita } from "../cita/cita";
import { Doctor } from "../doctores/doctor";
import { Laboratorista } from "../laboratoristas/laboratorista";
import { Patient } from "../pacientes/Patient";
import { TipoExamen } from "../tipoExamenes/tipo-examen";


export class Examen {
    public fecha : Date;
    public hora : String;
    public paciente: Patient;
    public tipo: TipoExamen;
    public ordenDoc: String;
    public informeDoc: String;

    constructor(){
        this.tipo = new TipoExamen();
        this.paciente = new Patient();
    }

}