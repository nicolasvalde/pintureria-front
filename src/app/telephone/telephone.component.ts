import {Component, OnInit} from '@angular/core';
import {Telephone} from '../interfaces/telephone';
import {TelephonesService} from '../services/telephones.service';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-telephone',
  templateUrl: './telephone.component.html',
  styleUrls: ['./telephone.component.css']
})
export class TelephoneComponent implements OnInit {

  telephone: Telephone = {
    'number': null,
    'id_provider': 1
  };

  telephones: SelectItem[];

  constructor(private telephonesService: TelephonesService) {
  }

  ngOnInit() {
  }

  saveTelephone() {
    console.log(this.telephone);
    this.telephonesService.save(this.telephone).subscribe((data) => {
      alert('Teléfono creado con éxito');
      console.log(data);
    }, (error) => {
      console.log(error);
      alert('Ocurrió un error');
    });
  }
}
