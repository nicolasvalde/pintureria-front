import {Component, OnInit} from '@angular/core';
import {Client} from '../interfaces/client';
import {HttpClient} from '../../../node_modules/@angular/common/http';
import {ClientsService} from '../services/clients.service';
import {Provider} from '../interfaces/provider';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients: Client[];

  constructor(private clientsService: ClientsService) {
    this.getClients();
  }

  ngOnInit() {
  }

  // Muestra los productos
  getClients() {
    this.clientsService.get().subscribe((data: Client[]) => {
      this.clients = data;
    }, (error) => {
      console.log(error);
      alert('Se ha producido un error');
    });
  }

// Elimina un proveedor
  delete(id) {
    if (confirm('Desea eliminar este cliente?')) {
      this.clientsService.delete(id).subscribe(() => {
        alert('Eliminado con éxito');
        // Llama para actualizar los productos
        this.getClients();
      }, (error) => {
        console.log(error);
        alert('Error');
      });
    }
  }
}
