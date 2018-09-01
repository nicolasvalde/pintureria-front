import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Product} from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  API_ENDPOINT = 'http://localhost/pintureria/public/';

  constructor(private httpClient: HttpClient) {
  }

  get() {
    return this.httpClient.get(this.API_ENDPOINT + 'api/v1/products');
  }

  save(product: Product) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post(this.API_ENDPOINT + 'api/v1/products', product);
  }

  put(product) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.put(this.API_ENDPOINT + 'api/v1/products/' + product.id, product);
  }

  delete(id) {
    return this.httpClient.delete(this.API_ENDPOINT + 'api/v1/products/' + id);
  }
}
