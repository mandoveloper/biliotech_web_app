import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstudianteDetalle } from 'src/app/models/estudiante.models';
import { EstudianteService } from '../../services/estudiante.service';
import { Estudiante } from '../../models/estudiante.models';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {

  estudiantes: Estudiante[] = [];
  estudiante: EstudianteDetalle;

  constructor(private estudiantesService: EstudianteService, private router: Router) { }

  ngOnInit(): void {
    this.getEstudiantes();
  }

  getEstudiantes() {
    this.estudiantesService.getEstudiantes().subscribe( (resp) => {
      this.estudiantes = resp;
    });
  }

  getEstudianteById(id: number) {
    this.estudiantesService.getEstudianteById(id).subscribe( (resp) => {
      this.estudiante = resp;
      this.router.navigateByUrl(`/estudiante/${id}`)
    });
  }

}
