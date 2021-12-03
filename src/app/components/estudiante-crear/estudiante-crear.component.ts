import { Component, OnInit } from '@angular/core';
import { EstudianteDetalle } from '../../models/estudiante.models';
import { EstudianteService } from '../../services/estudiante.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-estudiante-crear',
  templateUrl: './estudiante-crear.component.html',
  styleUrls: ['./estudiante-crear.component.css'],
})
export class EstudianteCrearComponent implements OnInit {
  forma: FormGroup;
  fechaActual = new Date();
  fecha: string = '';

  constructor(
    private estudiantesService: EstudianteService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.fecha =
      this.fechaActual.getFullYear().toString() +
      '-' +
      (this.fechaActual.getMonth() + 1).toString() +
      '-' +
      this.fechaActual.getDate().toString();
    console.log(this.fecha);
    this.crearFormulario();
  }

  crearFormulario() {
    this.forma = this.fb.group({
      id: [0],
      tipoDocumento: ['', Validators.required],
      numeroDocumento: ['', Validators.required],
      nombres: ['', Validators.required],
      apellidoPaterno: ['', Validators.required],
      apellidoMaternos: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      genero: ['', Validators.required],
      email: ['', Validators.required],
      telefono: ['', Validators.required],
      fechaRegistro: [this.fecha, Validators.required],
    });
  }

  agregarEstudiante() {
    // console.log(this.forma.value);

    this.estudiantesService
      .crearEstudiante(this.forma.value)
      .subscribe((resp) => {
        console.log(resp);
      });
  }
}
