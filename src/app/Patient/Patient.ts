import { User } from "src/User/User";

export interface Patient{
    sexo: number;
    fecha_nacimiento: number;
    telefono: string;
    peso: number;
    tipo_sangre: string;
    usuario: User;
}