import {Component, OnInit} from '@angular/core';
import {Measure} from '../interfaces/measure';
import {MeasuresService} from '../services/measures.service';
import {ActivatedRoute} from '@angular/router';
import {Brand} from '../interfaces/brand';

@Component({
  selector: 'app-measure',
  templateUrl: './measure.component.html',
  styleUrls: ['./measure.component.css']
})
export class MeasureComponent implements OnInit {

  measure: Measure = {
    quantity: null,
    scale: null,
  };

  measures: Measure[];

  id: any;
  editing = false;
  newPlaceholder_1 = '';
  newPlaceholder_2 = '';
  buttonText = '';

  constructor(private measuresService: MeasuresService, private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id) {
      this.newPlaceholder_1 = 'Ingrese el nuevo nombre para la marca...';
      this.newPlaceholder_2 = 'Ingrese el nuevo nombre para la marca...';
      this.buttonText = 'Actualizar marca';
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
      this.buttonText = 'Crear presentación';
      this.newPlaceholder_1 = 'Ingrese el volúmen de producto...';
      this.newPlaceholder_2 = 'Ingrese la unidad de medida del producto...';
      this.editing = false;
    }
  }

  ngOnInit() {
  }

  saveMeasure() {
    if (this.editing) {
      this.measuresService.put(this.measure).subscribe((data) => {
        alert('Marca actualizada con éxito');
        this.getMeasures();
        console.log(data);
      }, (error) => {
        console.log(error);
        alert('Ocurrió un error');
      });
    } else {
      this.measuresService.save(this.measure).subscribe((data) => {
        alert('Presentación creada con éxito');
        this.getMeasures();
        // this.getCategories(); //no tiene sentido acá
        console.log(data);
      }, (error) => {
        console.log(error);
        alert('Ocurrió un error');
      });
    }
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
}
