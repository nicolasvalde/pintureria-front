import {Component, OnInit} from '@angular/core';
import {Brand} from '../interfaces/brand';
import {BrandsService} from '../services/brands.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brand: Brand = {
    name: null,
  };

  brands: Brand[];

  id: any;
  editing = false;
  newPlaceholder = '';
  buttonText = '';

  constructor(private brandsService: BrandsService, private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id) {
      this.newPlaceholder = 'Ingrese el nuevo nombre para la marca...';
      this.buttonText = 'Actualizar marca';
      this.editing = true;
      this.brandsService.get().subscribe((data: Brand[]) => {
        this.brands = data;
        this.brand = this.brands.find((m) => {
          return m.id == this.id;
        });
        console.log(this.brand);
      }, (error => {
        console.log(error);
      }));
    } else {
      this.buttonText = 'Crear marca';
      this.newPlaceholder = 'Ingrese nombre de la nueva marca...';
      this.editing = false;
    }
  }

  ngOnInit() {
  }

  saveBrand() {
    if (this.editing) {
      this.brandsService.put(this.brand).subscribe((data) => {
        alert('Marca actualizada con éxito');
        this.getBrands();
        console.log(data);
      }, (error) => {
        console.log(error);
        alert('Ocurrió un error');
      });
    } else {
      this.brandsService.save(this.brand).subscribe((data) => {
        alert('Marca creada con éxito');
        this.getBrands();
        // this.getCategories(); //no tiene sentido acá
        console.log(data);
      }, (error) => {
        console.log(error);
        alert('Ocurrió un error');
      });
    }
  }

  getBrands() {
    this.brandsService.get().subscribe((data: Brand[]) => {
      this.brands = data;
      console.log(data);
    }, (error) => {
      console.log(error);
      alert('Se ha producido un error');
    });
  }

}
