import {Component, OnInit} from '@angular/core';
import {OrderNote} from '../interfaces/orderNote';
import {SelectItem} from 'primeng/api';
import {Provider} from '../interfaces/provider';
import {ProvidersService} from '../services/providers.service';
import {OrderNotesService} from '../services/order-notes.service';
import {Product} from '../interfaces/product';
import {ProductsService} from '../services/products.service';
import {OrderNoteDetail} from '../interfaces/orderNoteDetail';
import {OrderNotesDetailsService} from '../services/order-notes-details.service';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-order-note',
  templateUrl: './order-note.component.html',
  styleUrls: ['./order-note.component.css']
})
export class OrderNoteComponent implements OnInit {

  orderNote: OrderNote = {
    'provider_id': null,
    'date': null,
    'total': null
  };

  onDetail: OrderNoteDetail = {
    'type': null,
    'price': null,
    'quantity': null,
    'product_code': null,
  };

  onDetailsOficial: Array<OrderNoteDetail> = [];
  onDetailsPresupuesto: Array<OrderNoteDetail> = [];

  providers: SelectItem[];
  selectedProvider: Provider;

  products: Product[];
  selectedProduct: Product;

  display = false;

  constructor(private orderNotesService: OrderNotesService, private providersService: ProvidersService,
              private productService: ProductsService, private onDetailsService: OrderNotesDetailsService) {
    this.getProviders();
    this.getProducts();
  }

  ngOnInit() {
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

  getProducts() {
    this.productService.get().subscribe((data: Product[]) => {
      this.products = data;
      console.log(data);
    }, (error) => {
      console.log(error);
      alert('Se ha producido un error');
    });
  }

  showDialogToAdd(type: boolean) {
    this.display = true;

    this.onDetail = {
      'type': type,
      'price': null,
      'quantity': null,
      'product_code': null,
    };
  }

  save() {
    if (this.onDetail.type === true) {
      this.onDetailsOficial.push(this.onDetail);
    } else {
      this.onDetailsPresupuesto.push(this.onDetail);
    }
    console.log(this.onDetail);

    this.onDetail = {
      'type': null,
      'price': null,
      'quantity': null,
      'product_code': null,
    };

    this.selectedProduct = null;

    this.display = false;

    this.calcularTotal();
  }

  calcularTotal() {
    let total = 0;

    this.onDetailsOficial.forEach(function (value) {
      console.log(value);
      total += ((value.price.valueOf()) * (value.quantity.valueOf()));
    });

    this.onDetailsPresupuesto.forEach(function (value) {
      console.log(value);
      total += ((value.price.valueOf()) * (value.quantity.valueOf()));
    });

    this.orderNote.total = total;
  }

  saveOrderNote() {

    this.orderNote = {
      'provider_id': this.selectedProvider.id,
      'date': null,
      'total': this.orderNote.total
    };

    alert(this.orderNote.provider_id);
    alert(this.orderNote.date);
    alert(this.orderNote.total);

    this.orderNotesService.save(this.orderNote).subscribe((data) => {
      alert('Nota de pedido creada con éxito');
      console.log(data);
    }, (error) => {
      console.log(error);
      alert('Ocurrió un error');
    });
  }
}
