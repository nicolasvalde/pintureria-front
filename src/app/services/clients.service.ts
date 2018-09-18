import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '../../../node_modules/@angular/common/http';
import {Client} from '../interfaces/client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  API_ENDPOINT = 'http://localhost/pintureria/public/';

  constructor(private httpClient: HttpClient) {
  }

  get() {
    return this.httpClient.get(this.API_ENDPOINT + 'api/v1/clients');
  }

  save(client: Client) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post(this.API_ENDPOINT + 'api/v1/clients', client);
  }

  put(client) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.put(this.API_ENDPOINT + 'api/v1/clients/' + client.id, client);
  }

  delete(id) {
    return this.httpClient.delete(this.API_ENDPOINT + 'api/v1/clients/' + id);
  }
}
