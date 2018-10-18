import {Component, OnInit} from '@angular/core';
import {OrderNotesService} from '../services/order-notes.service';
import {OrderNote} from '../interfaces/orderNote';

@Component({
  selector: 'app-order-notes',
  templateUrl: './order-notes.component.html',
  styleUrls: ['./order-notes.component.css']
})
export class OrderNotesComponent implements OnInit {

  orderNotes: OrderNote[];

  constructor(private orderNotesService: OrderNotesService) {
    this.getOrderNotes();
  }

  ngOnInit() {
  }

  getOrderNotes() {
    this.orderNotesService.get().subscribe((data: OrderNote[]) => {
      this.orderNotes = data;
    }, (error) => {
      console.log(error);
      alert('Se ha producido un error');
    });
  }
}
