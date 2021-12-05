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
  isLoading: boolean = true;


  constructor(private estudiantesService: EstudianteService, private router: Router) { }

  ngOnInit(): void {
    this.getEstudiantes();
  }

  getEstudiantes() {
    this.estudiantesService.getEstudiantes().subscribe( (resp) => {
      this.estudiantes = resp;
      if (this.estudiantes) {
        this.isLoading = false;
      }
    });
  }

  getEstudianteById(id: number) {
    this.estudiantesService.getEstudianteById(id).subscribe( (resp) => {
      this.estudiante = resp;
      if (this.estudiante) {
        this.isLoading = false;
      }
      this.router.navigateByUrl(`/estudiante/${id}`)
    });
  }

}
