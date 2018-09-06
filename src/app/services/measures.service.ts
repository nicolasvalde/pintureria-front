import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Measure} from '../interfaces/measure';

@Injectable({
  providedIn: 'root'
})
export class MeasuresService {

  API_ENDPOINT = 'http://localhost/pintureria/public/';

  constructor(private httpClient: HttpClient) {
  }

  get() {
    return this.httpClient.get(this.API_ENDPOINT + 'api/v1/measures');
  }

  save(measure: Measure) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post(this.API_ENDPOINT + 'api/v1/measures', measure);
  }

  put(measure) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.put(this.API_ENDPOINT + 'api/v1/measures/' + measure.id, measure);
  }

  delete(id) {
    return this.httpClient.delete(this.API_ENDPOINT + 'api/v1/measures/' + id);
  }
}
