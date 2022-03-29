import { Doctor } from "../doctores/doctor";
import { Especialidad } from "../especialidades/especialidad";
import { Patient } from "../pacientes/Patient";


export class Cita {
    public fecha : Date;
    public hora : String;
    public paciente: Patient;
    public especialidad: Especialidad;
    public doctor: Doctor;

    constructor(){
        this.doctor = new Doctor();
        this.doctor.id = null;
        this.especialidad = new Especialidad();
        this.especialidad.id = null;
        this.paciente = new Patient();
        this.fecha = new Date();
    }

}