import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const API_URL = 'http://bibliotech-001-site1.itempurl.com';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user = new BehaviorSubject<string>('');

  constructor( private http: HttpClient ) { 
    const user_email = localStorage.getItem('user_email');
    if (user_email) {
        this.user.next(user_email);
    }

  }


  loginUser(email: string, password: string) {

    return this.http.get(`/api/Usuarios/LoginRepresentante?email=${email}&password=${password}`);

    
}

}
