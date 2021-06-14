import { Injectable } from "@angular/core";
import { cliente } from "../modelos/cliente";
import { HttpClient }  from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ClientesService{
API_URI = 'https://localhost:44344';
clienteSeleccionado: cliente;

constructor(private http: HttpClient) {
    this.clienteSeleccionado = new cliente();
}

getClientes(){
    return this.http.get<cliente[]>(`${this.API_URI}/clientes`);
}

getClienteId(id: string){
    return this.http.get<cliente>(`${this.API_URI}/clientes/${id}`);
}
postCliente(cliente: cliente){
    return this.http.post<cliente>(`${this.API_URI}/clientes/`, cliente);
}
putCliente(client: cliente): Observable<cliente>{
    return this.http.put<cliente>(`${this.API_URI}/clientes/`, client);
}
}