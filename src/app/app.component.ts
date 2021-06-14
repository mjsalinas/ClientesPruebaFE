import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { cliente } from './modelos/cliente';
import { ClientesService } from './services/clientes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  clientes: cliente[] = [];

  constructor(private clientsService: ClientesService) { }

  ngOnInit(): void {
    this.obtenerClientes();
  }

  obtenerClientes(){
    this.clientsService.getClientes().subscribe((data: cliente[]) => {
      this.clientes = data;
    })
  }
}
