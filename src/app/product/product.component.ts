import {Component, OnInit} from '@angular/core';
import {Product} from '../interfaces/product';
import {ProductsService} from '../services/products.service';
import {ActivatedRoute} from '@angular/router';
import {Category} from '../interfaces/category';
import {CategoriesService} from '../services/categories.service';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Product = {
    'nombre': null,
    'descripcion': null,
    'id_category': null
  };

  id: any;
  editing = false;
  title = '';
  products: Product[];
  categories: SelectItem[];
  selectedCategory: Category;
  selectedIndex: number;

  constructor(private productsService: ProductsService, private categoriesService: CategoriesService, private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.getCategories();
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

  getCategories() {
    this.categoriesService.get().subscribe((data: SelectItem[]) => {
      this.categories = data;
      console.log(data);
    }, (error) => {
      console.log(error);
      alert('Se ha producido un error');
    });
  }

  selectCat(cat: number) {
    console.log(this.selectedCategory);

    // se asigna al producto que va a ser enviado por post
    // el id del item del dropdown seleccionado
    this.product.id_category = this.selectedCategory.id;
  }

  addCategory() {
    console.log('Agregar modal');
  }
}
