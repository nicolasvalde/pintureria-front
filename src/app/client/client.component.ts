import {Component, OnInit} from '@angular/core';
import {Client} from '../interfaces/client';
import {ClientsService} from '../services/clients.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  client: Client = {
    'nombre': null,
    'apellido': null,
    'telefono': null,
    'mail': null
  };

  constructor(private clientsService: ClientsService) {
  }

  ngOnInit() {
  }

  saveClient() {
    console.log(this.client);
    this.clientsService.save(this.client).subscribe((data) => {
      alert('Cliente creado con éxito');
      console.log(data);
    }, (error) => {
      console.log(error);
      alert('Ocurrió un error');
    });
  }

}
