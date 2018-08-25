import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CategoriesService} from '../services/categories.service';
import {Category} from '../interfaces/category';
import {Product} from '../interfaces/product';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[];

  selectedCategory: Category;

  @Input() product: Product;

  constructor(private categoriesService: CategoriesService) {
    this.getCategories();
  }

  ngOnInit() {
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
