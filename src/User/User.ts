import { Rol } from "./Rol";

export interface User{
    nombre: string;
    codigo: string;
    email: string;
    password: string;
    rol: Rol;
}