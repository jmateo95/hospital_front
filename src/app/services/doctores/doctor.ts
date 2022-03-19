export class Doctor {
    public id: number;
    public sexo: number;
    public fecha_nacimiento: Date;
    public telefono: string;
    public peso: number;
    public tipo_sangre: string;
    public nombre: string;
    public codigo: string;
    public email: string;
    public password: string;
    public dpi: number;
    constructor(){
        this.codigo = "DOC"
    }

}
