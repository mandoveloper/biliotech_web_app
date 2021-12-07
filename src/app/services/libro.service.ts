import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Libro, RequestLibroBilbioteca } from '../models/libro.models';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  userEmail: string = "";

  constructor(private http: HttpClient, private loginService: LoginService) { 
    loginService.user.subscribe( resp => {
      this.userEmail = resp;
      console.log(this.userEmail);
      
    });
  }

  listarLibros() {
    return this.http.get<Libro[]>(`/api/Biblioteca/ListarLibrosBiblioteca?email=${this.userEmail}`);
  }

  listarLibrosGeneral() {
    return this.http.get<RequestLibroBilbioteca[]>(`/api/Biblioteca/ListarLibrosGeneral?email=${this.userEmail}`);
  }

  detalleLibroId(id: number ) {
    return this.http.get<Libro>(`/api/Libros/DetalleLibro?idLibro=${id}`);
  }

  listarLibrosEstudiante(id: number) {
    return this.http.get<Libro[]>(`/api/Libros/ListarLibrosxEstudiante?idEstudiante=${id}`);
  }

  registrarLibro(objLibro: any) {
    
    return this.http.post(`/api/Biblioteca/RegistrarLibroBiblioteca`, objLibro);
  }

  actualizarLibroBiblioteca(objLibro: any) {
    
    return this.http.post(`/api/Biblioteca/ActualizarStockLibroBiblioteca`, objLibro);
  }

}
