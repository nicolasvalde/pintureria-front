import {Component, OnInit} from '@angular/core';
import {Product} from '../interfaces/product';
import {ProductsService} from '../services/products.service';

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

  constructor(private productsService: ProductsService) {
  }

  ngOnInit() {
  }

  saveProduct() {
    console.log(this.product);
    this.productsService.save(this.product).subscribe((data) => {
      alert('Producto creado con éxito');
      console.log(data);
    }, (error) => {
      console.log(error);
      alert('Ocurrió un error');
    });
  }
}
