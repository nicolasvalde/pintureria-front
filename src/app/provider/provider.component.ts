import {Component, OnInit} from '@angular/core';
import {Provider} from '../interfaces/provider';
import {ProvidersService} from '../services/providers.service';
import {SelectItem} from 'primeng/api';
import {Product} from '../interfaces/product';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {

  id: any;
  title = '';
  editing = false;
  providers: Provider[];

  provider: Provider = {
    'razon_social': null,
    'direccion': null,
    'mail': null,
    'cuit': null,
    'telefono': null
  };

  constructor(private providersService: ProvidersService, private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id) {
      this.title = 'EDITAR PROVEEDOR';
      this.editing = true;
      this.providersService.get().subscribe((data: Provider[]) => {
        this.providers = data;
        this.provider = this.providers.find((m) => {
          return m.id == this.id;
        });
        console.log(this.provider);
      }, (error => {
        console.log(error);
      }));
    } else {
      this.title = 'NUEVO PROVEEDOR';
      this.editing = false;
    }
  }

  ngOnInit() {
  }

  saveProvider() {
    if (this.editing) {
      this.providersService.put(this.provider).subscribe((data) => {
        alert('Proveedor actualizado con éxito');
        console.log(data);
      }, (error) => {
        console.log(error);
        alert('Ocurrió un error');
      });
    } else {
      this.providersService.save(this.provider).subscribe((data) => {
        alert('Proveedor creado con éxito');
        console.log(data);
      }, (error) => {
        console.log(error);
        alert('Ocurrió un error');
      });
    }
  }
}
