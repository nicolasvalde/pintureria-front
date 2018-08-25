import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../services/products.service';
import {Product} from '../interfaces/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductsService) {
    this.getProducts();
  }

  ngOnInit() {
  }

  // Muestra los productos
  getProducts() {
    this.productService.get().subscribe((data: Product[]) => {
      this.products = data;
    }, (error) => {
      console.log(error);
      alert('Se ha producido un error');
    });
  }

  // Elimina un producto
  delete(id) {
    if (confirm('Desea eliminar este producto?')) {
      this.productService.delete(id).subscribe(() => {
        alert('Eliminado con éxito');
        // Llama para actualizar los productos
        this.getProducts();
      }, (error) => {
        console.log(error);
        alert('Error');
      });
    }
  }

}
