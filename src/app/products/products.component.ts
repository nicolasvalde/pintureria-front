import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../services/products.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TableModule} from 'primeng/table';
import {Product} from '../interfaces/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  // API_ENDPOINT = 'http://localhost:8000';
  products: Product[];

  constructor(private productService: ProductsService, private httpClient: HttpClient) {
    this.productService.get().subscribe((data: Product[]) => {
      this.products = data;
    }, (error) => {
      console.log(error);
      alert('Se ha producido un error');
    });
  }

  ngOnInit() {
  }

}
