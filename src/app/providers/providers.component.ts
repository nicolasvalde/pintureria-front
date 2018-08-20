import {Component, OnInit} from '@angular/core';
import {Provider} from '../interfaces/provider';
import {ProvidersService} from '../services/providers.service';
import {HttpClient} from '@angular/common/http';
import {Product} from '../interfaces/product';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css']
})
export class ProvidersComponent implements OnInit {

  providers: Provider[];

  constructor(private providerService: ProvidersService, private httpClient: HttpClient) {
    this.providerService.get().subscribe((data: Provider[]) => {
      this.providers = data;
    }, (error) => {
      console.log(error);
      alert('Se ha producido un error');
    });
  }

  ngOnInit() {
  }

}
