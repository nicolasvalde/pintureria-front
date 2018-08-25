import {Component, OnInit} from '@angular/core';
import {Product} from '../interfaces/product';
import {ProductsService} from '../services/products.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Product = {
    'nombre': null,
    'descripcion': null
  };

  id: any;
  editing: boolean = false;
  title = '';
  products: Product[];

  constructor(private productsService: ProductsService, private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id) {
      this.title = 'EDITAR PRODUCTO';
      this.editing = true;
      this.productsService.get().subscribe((data: Product[]) => {
        this.products = data;
        this.product = this.products.find((m) => {
          return m.id == this.id;
        });
        console.log(this.product);
      }, (error => {
        console.log(error);
      }));
    } else {
      this.title = 'NUEVO PRODUCTO';
      this.editing = false;
    }
  }

  ngOnInit() {
  }

  saveProduct() {
    if (this.editing) {
      this.productsService.put(this.product).subscribe((data) => {
        alert('Producto actualizado con éxito');
        console.log(data);
      }, (error) => {
        console.log(error);
        alert('Ocurrió un error');
      });
    } else {
      this.productsService.save(this.product).subscribe((data) => {
        alert('Producto creado con éxito');
        console.log(data);
      }, (error) => {
        console.log(error);
        alert('Ocurrió un error');
      });
    }
  }
}
