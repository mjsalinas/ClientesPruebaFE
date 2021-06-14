export class cliente {

    constructor (id=" ", nombre=" ", fechaNacimiento = new Date, estadoCivil = " ", activo = " "){
        this.id  = id;
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
        this.estadoCivil = estadoCivil;
        this.activo = activo;
    }
    id?: string;
    nombre?: string;
    fechaNacimiento?: Date;
    estadoCivil?: string;
    activo?: string;
}