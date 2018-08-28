import {Component, OnInit} from '@angular/core';
import {CategoriesService} from '../services/categories.service';
import {Category} from '../interfaces/category';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[];
  editing = false;
  display = false;
  flag = false;

  category: Category = {
    name: null,
  };

  id: any;
  newPlaceholder = '';

  constructor(private categoriesService: CategoriesService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.getCategories();
    this.id = this.activatedRoute.snapshot.params['id'];
    // this.getCategories();
    if (this.id) {
      //this.title = 'EDITAR RUBRO';
      this.newPlaceholder = 'Ingrese el nuevo nombre del rubro...';
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
      //this.title = 'NUEVO PRODUCTO';
      this.newPlaceholder = 'Ingrese nombre del nuevo rubro...';
      this.editing = false;
    }
  }

  ngOnInit() {
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

// Elimina un rubro
  delete(id) {
    if (confirm('Desea eliminar este rubro?')) {
      this.categoriesService.delete(id).subscribe(() => {
        alert('Eliminado con éxito');
        // Llama para actualizar los productos
        this.getCategories();
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
      this.router.navigateByUrl('categories');
    }
    this.getCategories();
  }
}
