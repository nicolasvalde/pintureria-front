import {Component, OnInit} from '@angular/core';
import {Product} from '../interfaces/product';
import {ProductsService} from '../services/products.service';
import {ActivatedRoute} from '@angular/router';
import {Category} from '../interfaces/category';
import {CategoriesService} from '../services/categories.service';
import {SelectItem} from 'primeng/api';
import {Brand} from '../interfaces/brand';
import {BrandsService} from '../services/brands.service';
import {Provider} from '../interfaces/provider';
import {ProvidersService} from '../services/providers.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Product = {
    'brand_id': null,
    'measure_quantity': null,
    'measure_scale': null,
    'category_id': null,
    'provider_id': null,
  };

  id: any;
  id_category: any;
  editing = false;
  title = '';
  products: Product[];
  display = false;

  categories: SelectItem[];
  selectedCategory: Category;
  // category: SelectItem;

  brands: SelectItem[];
  selectedBrand: Brand;

  measures: SelectItem[];
  selectedMeasure: any;

  providers: SelectItem[];
  selectedProvider: Provider;

  constructor(private productsService: ProductsService, private categoriesService: CategoriesService,
              private brandsService: BrandsService, private providersService: ProvidersService,
              private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.getCategories();
    this.getBrands();
    this.measures = [
      {label: 'Kg', value: 'Kg'},
      {label: 'Litros', value: 'Litros'},
      {label: 'cc', value: 'cc'},
      {label: 'ml', value: 'ml'},
      {label: 'unidades', value: 'unidades'},
    ];
    this.getProviders();
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
      this.selectedCategory = null;
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

  getBrands() {
    this.brandsService.get().subscribe((data: SelectItem[]) => {
      this.brands = data;
      console.log(data);
    }, (error) => {
      console.log(error);
      alert('Se ha producido un error');
    });
  }

  getProviders() {
    this.providersService.get().subscribe((data: SelectItem[]) => {
      this.providers = data;
      console.log(data);
    }, (error) => {
      console.log(error);
      alert('Se ha producido un error');
    });
  }

  selectBrand() {
    // console.log(this.selectedCategory);

    // se asigna al producto que va a ser enviado por post
    // el id del item del dropdown seleccionado
    this.product.brand_id = this.selectedBrand.id;
  }

  selectCat() {
    // console.log(this.selectedCategory);

    // se asigna al producto que va a ser enviado por post
    // el id del item del dropdown seleccionado
    this.product.category_id = this.selectedCategory.id;
  }

  selectScale() {
    // console.log(this.selectedCategory);

    // se asigna al producto que va a ser enviado por post
    // el id del item del dropdown seleccionado
    this.product.measure_scale = this.selectedMeasure.label;
    console.log(this.selectedMeasure.label);
  }

  selectProvider() {
    // console.log(this.selectedCategory);

    // se asigna al producto que va a ser enviado por post
    // el id del item del dropdown seleccionado
    this.product.provider_id = this.selectedProvider.id;
  }

  addCategory() {
    this.display = true;
    this.getCategories();
  }

  addBrand() {
    this.display = true;
    this.getBrands();
  }
}
