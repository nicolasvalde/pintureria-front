import {Component, OnInit} from '@angular/core';
import {Client} from '../interfaces/client';
import {HttpClient} from '../../../node_modules/@angular/common/http';
import {ClientsService} from '../services/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients: Client[];

  constructor(private clientsService: ClientsService, private httpClient: HttpClient) {
    this.clientsService.get().subscribe((data: Client[]) => {
      this.clients = data;
    }, (error) => {
      console.log(error);
      alert('Se ha producido un error');
    });
  }

  ngOnInit() {
  }

}
