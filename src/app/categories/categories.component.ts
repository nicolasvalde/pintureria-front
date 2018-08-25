import {Component, Input, OnInit} from '@angular/core';
import {CategoriesService} from '../services/categories.service';
import {Category} from '../interfaces/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[];

  constructor(private categoriesService: CategoriesService) {
    this.getCategories();
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
    if (confirm('Desea eliminar este producto?')) {
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

}
