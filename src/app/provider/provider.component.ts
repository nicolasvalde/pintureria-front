import {Component, OnInit} from '@angular/core';
import {Client} from '../interfaces/client';
import {Provider} from '../interfaces/provider';
import {ProvidersService} from '../services/providers.service';
import {SelectItem} from 'primeng/api';
import {Telephone} from '../interfaces/telephone';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {

  provider: Provider = {
    'razon_social': null,
    'direccion': null,
    'mail': null,
    'cuit': null
  };

  telephone: Telephone = {
    'number': null,
    'id_provider': 1
  };

  telephones: SelectItem[];

  selectedTelephone: Telephone;

  constructor(private providersService: ProvidersService) {
  }

  ngOnInit() {
  }

  saveProvider() {
    console.log(this.provider);
    this.providersService.save(this.provider).subscribe((data) => {
      alert('Proveedor creado con éxito');
      console.log(data);
    }, (error) => {
      console.log(error);
      alert('Ocurrió un error');
    });
  }


}
