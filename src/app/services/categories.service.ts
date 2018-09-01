import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Category} from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  API_ENDPOINT = 'http://localhost/pintureria/public/';

  constructor(private httpClient: HttpClient) {
  }

  get() {
    return this.httpClient.get(this.API_ENDPOINT + 'api/v1/categories');
  }

  save(category: Category) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post(this.API_ENDPOINT + 'api/v1/categories', category);
  }

  put(category) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.put(this.API_ENDPOINT + 'api/v1/categories/' + category.id, category);
  }

  delete(id) {
    return this.httpClient.delete(this.API_ENDPOINT + 'api/v1/categories/' + id);
  }
}
