import {Component, OnInit} from '@angular/core';
import {Brand} from '../interfaces/brand';
import {MeasuresService} from '../services/measures.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Measure} from '../interfaces/measure';

@Component({
  selector: 'app-measures',
  templateUrl: './measures.component.html',
  styleUrls: ['./measures.component.css']
})
export class MeasuresComponent implements OnInit {

  measures: Measure[];
  editing = false;
  display = false;
  flag = false;

  measure: Measure = {
    quantity: null,
    scale: null
  };

  id: any;
  newPlaceholder = '';

  constructor(private measuresService: MeasuresService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.getMeasures();
    this.id = this.activatedRoute.snapshot.params['id'];
    // this.getCategories();
    if (this.id) {
      this.newPlaceholder = 'Ingrese el nuevo nombre del rubro...';
      this.editing = true;
      this.measuresService.get().subscribe((data: Measure[]) => {
        this.measures = data;
        this.measure = this.measures.find((m) => {
          return m.id == this.id;
        });
        console.log(this.measure);
      }, (error => {
        console.log(error);
      }));
    } else {
      this.newPlaceholder = 'Ingrese nombre del nuevo rubro...';
      this.editing = false;
    }
  }

  ngOnInit() {
  }

  getMeasures() {
    this.measuresService.get().subscribe((data: Measure[]) => {
      this.measures = data;
      console.log(data);
    }, (error) => {
      console.log(error);
      alert('Se ha producido un error');
    });
  }

  delete(id) {
    if (confirm('Desea eliminar esta marca?')) {
      this.measuresService.delete(id).subscribe(() => {
        alert('Eliminada con éxito');
        // Llama para actualizar los productos
        this.getMeasures();
      }, (error) => {
        console.log(error);
        alert('Error');
      });
    }
  }
}
