import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../model/users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl = "https://jsonplaceholder.typicode.com/users"

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Users> {
    return this.http.get<Users>(`${this.baseUrl}`);
  }
  
}
