import {Component, OnInit} from '@angular/core';
import {SelectItem} from 'primeng/api';
import {Telephone} from '../interfaces/telephone';
import {TelephonesService} from '../services/telephones.service';

@Component({
  selector: 'app-telephones',
  templateUrl: './telephones.component.html',
  styleUrls: ['./telephones.component.css']
})
export class TelephonesComponent implements OnInit {

  telephones: SelectItem[];

  selectedTelephone: Telephone;

  constructor(private telephonesService: TelephonesService) {
  }

  ngOnInit() {
  }

  addPhone() {
    alert('Por implementar');
  }

  removePhone() {
    alert('Por implementar');
  }

  getTelephones() {
    this.telephonesService.get().subscribe((data: SelectItem[]) => {
      this.telephones = data;
      console.log(data);
    }, (error) => {
      console.log(error);
      alert('Se ha producido un error');
    });
  }
}
