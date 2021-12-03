import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule,  ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { EstudianteComponent } from './components/estudiante/estudiante.component';
import { EstudianteCrearComponent } from './components/estudiante-crear/estudiante-crear.component';
import { EstudianteEditarComponent } from './components/estudiante-editar/estudiante-editar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LibrosComponent } from './components/libros/libros.component';
import { LibroComponent } from './components/libro/libro.component';
import { LibroCrearComponent } from './components/libro-crear/libro-crear.component';
import { LibroEditarComponent } from './components/libro-editar/libro-editar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EstudiantesComponent,
    EstudianteComponent,
    EstudianteCrearComponent,
    EstudianteEditarComponent,
    NavbarComponent,
    LibrosComponent,
    LibroComponent,
    LibroCrearComponent,
    LibroEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
