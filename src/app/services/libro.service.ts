import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Libro } from '../models/libro.models';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  constructor(private http: HttpClient) { }

  listarLibros() {
    return this.http.get<Libro[]>(`/api/Libros/ListarLibros?idInstitucion=1`);
  }

  detalleLibroId(id: number ) {
    return this.http.get<Libro>(`/api/Libros/DetalleLibro?idLibro=${id}`);
  }

  listarLibrosEstudiante(id: number) {
    return this.http.get<Libro[]>(`/api/Libros/ListarLibrosxEstudiante?idEstudiante=${id}`);
  }


}
