import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Estudiante, EstudianteDetalle } from '../models/estudiante.models';

const API_URL = 'http://bibliotech-001-site1.itempurl.com';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  constructor(private http: HttpClient) { }

  getEstudiantes() {
    return this.http.get<Estudiante[]>(`/api/Usuarios/ListarEstudiantes`);
  }

  getEstudianteById( id: number ) {

    return this.http.get<EstudianteDetalle>(`/api/Usuarios/DetalleEstudiante?idEstudiante=${id}`);

  }

  crearEstudiante(obj: EstudianteDetalle) {
    const body = {
      id: 0,
      tipoDocumento: obj.tipoDocumento,
      numeroDocumento: obj.numeroDocumento,
      nombres: obj.nombres,
      apellidoPaterno: obj.apellidoPaterno,
      apellidoMaternos: obj.apellidoMaternos,
      fechaNacimiento: obj.fechaNacimiento,
      genero: obj.genero,
      email: obj.email,
      telefono: obj.telefono,
      fechaRegistro: "2021-11-20"
    }
    
    console.log('LOG DEL BODDY', body);
    
    return this.http.post(`/api/Usuarios/AgregarEstudiante`, body);

  }

  // editarEstudiante(objEstudiante: EstudianteDetalle) {

  //   const body = {
  //     objEstudiante
  //   }

  //   return this.http.post(`${API_URL}/api/Usuarios/AgregarEstudiante`, body);

  // }





}
