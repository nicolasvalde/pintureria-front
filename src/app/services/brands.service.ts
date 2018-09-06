import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Brand} from '../interfaces/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  API_ENDPOINT = 'http://localhost/pintureria/public/';

  constructor(private httpClient: HttpClient) {
  }

  get() {
    return this.httpClient.get(this.API_ENDPOINT + 'api/v1/brands');
  }

  save(brand: Brand) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post(this.API_ENDPOINT + 'api/v1/brands', brand);
  }

  put(brand) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.put(this.API_ENDPOINT + 'api/v1/brands/' + brand.id, brand);
  }

  delete(id) {
    return this.httpClient.delete(this.API_ENDPOINT + 'api/v1/brands/' + id);
  }
}
