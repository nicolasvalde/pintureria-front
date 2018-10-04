import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {OrderNote} from '../interfaces/orderNote';

@Injectable({
  providedIn: 'root'
})
export class OrderNotesService {

  API_ENDPOINT = 'http://localhost/pintureria/public/';

  constructor(private httpClient: HttpClient) { }

  get() {
    return this.httpClient.get(this.API_ENDPOINT + 'api/v1/orderNotes');
  }

  save(orderNote: OrderNote) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post(this.API_ENDPOINT + 'api/v1/orderNotes', orderNote);
  }

  put(orderNote) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.put(this.API_ENDPOINT + 'api/v1/orderNotes/' + orderNote.id, orderNote);
  }

  delete(id) {
    return this.httpClient.delete(this.API_ENDPOINT + 'api/v1/orderNotes/' + id);
  }
}
