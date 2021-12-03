import { Component, OnInit } from '@angular/core';
import { EstudianteService } from '../../services/estudiante.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EstudianteDetalle } from '../../models/estudiante.models';
import { LibroService } from '../../services/libro.service';
import { Libro } from 'src/app/models/libro.models';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {

  idEstudiante: number = 0;

  estudianteDetalle: EstudianteDetalle = {
    id: 0,
    tipoDocumento: "",
    numeroDocumento: "",
    nombres: "",
    apellidoPaterno: "",
    apellidoMaternos: "",
    fechaNacimiento: "",
    genero: "",
    email: "",
    telefono: "",
    fechaRegistro: ""
  };

  libros: Libro[] = [];


  constructor( private estudiantesService: EstudianteService, private activatedRoute: ActivatedRoute, private libroService: LibroService) { 

  }

  ngOnInit(): void {
    this.getDetalleEstudiante();

    this.getLibrosByEstudiante();
  }


  getDetalleEstudiante() {
    const id = this.activatedRoute.snapshot.params.id;

    this.estudiantesService.getEstudianteById(id).subscribe( resp => {
      console.log(resp);
      this.estudianteDetalle = resp;
    })
  }

  getLibrosByEstudiante() {
    const id = this.activatedRoute.snapshot.params.id;
    this.libroService.listarLibrosEstudiante(id).subscribe( (resp) => {
      console.log('Libros de estudante', resp);
      this.libros = resp;
    });
  }
}
