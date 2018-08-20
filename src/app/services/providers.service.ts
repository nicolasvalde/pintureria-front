import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '../../../node_modules/@angular/common/http';
import {Provider} from '../interfaces/provider';

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {

  API_ENDPOINT = 'http://localhost:8000/';

  constructor(private httpClient: HttpClient) {
  }

  get() {
    return this.httpClient.get(this.API_ENDPOINT + 'api/v1/providers');
  }

  save(provider: Provider) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post(this.API_ENDPOINT + 'api/v1/providers', provider);
  }
}
