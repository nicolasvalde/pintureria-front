import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {OrderNoteDetail} from '../interfaces/orderNoteDetail';

@Injectable({
  providedIn: 'root'
})
export class OrderNotesDetailsService {

  API_ENDPOINT = 'http://localhost/pintureria/public/';

  constructor(private httpClient: HttpClient) {
  }

  get() {
    return this.httpClient.get(this.API_ENDPOINT + 'api/v1/onDetails');
  }

  save(onDetail: OrderNoteDetail[]) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post(this.API_ENDPOINT + 'api/v1/onDetails', onDetail);
  }
}
