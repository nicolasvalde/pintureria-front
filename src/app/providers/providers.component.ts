import {Component, OnInit} from '@angular/core';
import {Provider} from '../interfaces/provider';
import {ProvidersService} from '../services/providers.service';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css']
})
export class ProvidersComponent implements OnInit {

  providers: Provider[];

  constructor(private providerService: ProvidersService) {
    this.getProviders();
  }

  ngOnInit() {
  }

  // Muestra los productos
  getProviders() {
    this.providerService.get().subscribe((data: Provider[]) => {
      this.providers = data;
    }, (error) => {
      console.log(error);
      alert('Se ha producido un error');
    });
  }

  // Elimina un proveedor
  delete(id) {
    if (confirm('Desea eliminar este proveedor?')) {
      this.providerService.delete(id).subscribe(() => {
        alert('Eliminado con éxito');
        // Llama para actualizar los productos
        this.getProviders();
      }, (error) => {
        console.log(error);
        alert('Error');
      });
    }
  }

}
