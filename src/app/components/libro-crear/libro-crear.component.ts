import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-libro-crear',
  templateUrl: './libro-crear.component.html',
  styleUrls: ['./libro-crear.component.css'],
})
export class LibroCrearComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  async agregarLibro(id: number) {
    // console.log('id desde agregar libro a bliblioteca', id);

    Swal.fire({
      title: 'Ingresar la cantidad a requerir',
      input: 'number',
      inputAttributes: {
        autocapitalize: 'off',
      },
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      confirmButtonColor: '#0275d8',
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#d9534f',
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        // agregar endpoint de guardado
        return fetch(``)
          .then((response) => {
            if (!response.ok) {
              throw new Error(response.statusText);
            }
            return response.json();
          })
          .catch((error) => {
            Swal.showValidationMessage(`Fallo al guardar: ${error}`);
          });
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `Libro agregado con éxito`,
          // imageUrl: result.value.avatar_url,
        });
      }
    });
  }
}
