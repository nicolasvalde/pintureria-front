import {Component, Input, OnInit} from '@angular/core';
import {Import} from '@angular/compiler-cli/src/ngtsc/host';
import {Category} from '../interfaces/category';
import {CategoriesService} from '../services/categories.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../interfaces/product';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  category: Category = {
    name: null,
  };

  categories: Category[];

  id: any;
  editing = false;
  newPlaceholder = '';
  buttonText = '';

  constructor(private categoriesService: CategoriesService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.id = this.activatedRoute.snapshot.params['id'];
    // this.getCategories();
    if (this.id) {
      // this.title = 'EDITAR RUBRO';
      this.newPlaceholder = 'Ingrese el nuevo nombre del rubro...';
      this.buttonText = 'Actualizar rubro';
      this.editing = true;
      this.categoriesService.get().subscribe((data: Category[]) => {
        this.categories = data;
        this.category = this.categories.find((m) => {
          return m.id == this.id;
        });
        console.log(this.category);
      }, (error => {
        console.log(error);
      }));
    } else {
      // this.title = 'NUEVO PRODUCTO';
      this.buttonText = 'Crear rubro';
      this.newPlaceholder = 'Ingrese nombre del nuevo rubro...';
      this.editing = false;
    }
  }

  ngOnInit() {
  }

  saveCategory() {
    if (this.editing) {
      this.categoriesService.put(this.category).subscribe((data) => {
        alert('Rubro actualizado con éxito');
        this.getCategories();
        console.log(data);
      }, (error) => {
        console.log(error);
        alert('Ocurrió un error');
      });
    } else {
      this.categoriesService.save(this.category).subscribe((data) => {
        alert('Rubro creado con éxito');
        this.getCategories();
        // this.getCategories(); //no tiene sentido acá
        console.log(data);
      }, (error) => {
        console.log(error);
        alert('Ocurrió un error');
      });
    }
  }

  getCategories() {
    this.categoriesService.get().subscribe((data: Category[]) => {
      this.categories = data;
      console.log(data);
    }, (error) => {
      console.log(error);
      alert('Se ha producido un error');
    });
  }
}


