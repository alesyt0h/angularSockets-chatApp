export class Usuario {

    public nombre: string;

    constructor(nombre: string){
        this.nombre = nombre;
    }

}

export interface Mensaje {
    de: string;
    cuerpo: string;
}
