import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../services/products.service';
import {Product} from '../interfaces/product';
import {Category} from '../interfaces/category';
import {CategoriesService} from '../services/categories.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  categories: Category[];

  category: Category = {
    'name': null,
  };

  constructor(private productService: ProductsService, private categoriesService: CategoriesService) {
    this.getProducts();
    this.getCategories();
  }

  ngOnInit() {
  }

  // Muestra los productos
  getProducts() {
    this.productService.get().subscribe((data: Product[]) => {
      this.products = data;
      console.log(data);
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

  getCategories() {
    this.categoriesService.get().subscribe((data: Category[]) => {
      this.categories = data;
    }, (error) => {
      console.log(error);
      alert('Se ha producido un error');
    });
  }
}
