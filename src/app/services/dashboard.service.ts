import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Dashboard } from '../models/dashboard.models';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private _http:HttpClient) { }

  GetCategoriasPrestamos(){

    return this._http.get<Dashboard>(`/api/Dashboard/GetCategoriasPrestamos`);

  }
  GetInteraccionesCategorias(){

    return this._http.get<Dashboard>(`/api/Dashboard/GetInteraccionesCategorias`);

  }
  GetLibrosRank(){

    return this._http.get<Dashboard>(`/api/Dashboard/GetLibrosRank`);

  }
}
