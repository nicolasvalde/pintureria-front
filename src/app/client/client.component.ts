import {Component, OnInit} from '@angular/core';
import {Client} from '../interfaces/client';
import {ClientsService} from '../services/clients.service';
import {ProvidersService} from '../services/providers.service';
import {ActivatedRoute} from '@angular/router';
import {Provider} from '../interfaces/provider';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  id: any;
  title = '';
  editing = false;
  clients: Client[];

  client: Client = {
    'nombre': null,
    'apellido': null,
    'telefono': null,
    'mail': null,
    'cuit': null
  };

  constructor(private clientsService: ClientsService, private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id) {
      this.title = 'EDITAR CLIENTE';
      this.editing = true;
      this.clientsService.get().subscribe((data: Client[]) => {
        this.clients = data;
        this.client = this.clients.find((m) => {
          return m.id == this.id;
        });
        console.log(this.client);
      }, (error => {
        console.log(error);
      }));
    } else {
      this.title = 'NUEVO CLIENTE';
      this.editing = false;
    }
  }

  ngOnInit() {
  }

  saveClient() {
    if (this.editing) {
      this.clientsService.put(this.client).subscribe((data) => {
        alert('Cliente actualizado con éxito');
        console.log(data);
      }, (error) => {
        console.log(error);
        alert('Ocurrió un error');
      });
    } else {
      this.clientsService.save(this.client).subscribe((data) => {
        alert('Cliente creado con éxito');
        console.log(data);
      }, (error) => {
        console.log(error);
        alert('Ocurrió un error');
      });
    }
  }

}
