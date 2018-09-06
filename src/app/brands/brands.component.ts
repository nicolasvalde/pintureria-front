import {Component, OnInit} from '@angular/core';
import {Brand} from '../interfaces/brand';
import {BrandsService} from '../services/brands.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {

  brands: Brand[];
  editing = false;
  display = false;
  flag = false;

  brand: Brand = {
    name: null,
  };

  id: any;
  newPlaceholder = '';

  constructor(private brandsService: BrandsService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.getBrands();
    this.id = this.activatedRoute.snapshot.params['id'];
    // this.getCategories();
    if (this.id) {
      this.newPlaceholder = 'Ingrese el nuevo nombre del rubro...';
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
      this.newPlaceholder = 'Ingrese nombre del nuevo rubro...';
      this.editing = false;
    }
  }

  ngOnInit() {
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

  // Elimina un rubro
  delete(id) {
    if (confirm('Desea eliminar esta marca?')) {
      this.brandsService.delete(id).subscribe(() => {
        alert('Eliminada con éxito');
        // Llama para actualizar los productos
        this.getBrands();
      }, (error) => {
        console.log(error);
        alert('Error');
      });
    }
  }

  showDialog() {
    this.display = true;
    this.flag = true;
  }

  cerrar() {
    console.log('coso');
    // evita que se haga dos veces el onHide
    if (this.flag == true) {
      this.flag = false;
      this.router.navigateByUrl('brands');
    }
    this.getBrands();
  }
}
