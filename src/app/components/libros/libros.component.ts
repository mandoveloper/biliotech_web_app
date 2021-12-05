import { Component, OnInit } from '@angular/core';
import { LibroService } from '../../services/libro.service';
import { Router } from '@angular/router';
import { Libro } from '../../models/libro.models';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  libros: Libro[] = [];
  isLoading: boolean = true;

  constructor( private libroService: LibroService, private router: Router) { }

  ngOnInit(): void {
    this.getLibros();
  }

  getLibros() {
    this.libroService.listarLibros().subscribe( (resp) => {
      console.log(resp);
      this.libros = resp;
      if (this.libros) {
        this.isLoading = false;
      }
    });
  }

  




}
