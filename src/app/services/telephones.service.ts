import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Telephone} from '../interfaces/telephone';


@Injectable({
  providedIn: 'root'
})
export class TelephonesService {

  API_ENDPOINT = 'http://localhost/pintureria/public/';

  constructor(private httpClient: HttpClient) {
  }

  get() {
    return this.httpClient.get(this.API_ENDPOINT + 'api/v1/providerphones');
  }

  save(telephone: Telephone) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post(this.API_ENDPOINT + 'api/v1/providerphones', telephone);
  }

  put(telephone) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.put(this.API_ENDPOINT + 'api/v1/providerphones/' + telephone.id, telephone);
  }

  delete(id) {
    return this.httpClient.delete(this.API_ENDPOINT + 'api/v1/providerphones/' + id);
  }

}
