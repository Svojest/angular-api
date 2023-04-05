import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { IData, IDataUser, IUser } from '../models/interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getUsers(): Observable<IDataUser> {
    return this.http.get<any>('https://reqres.in/api/users?page=2');
  }
  getUser(id: number): Observable<IDataUser> {
    const url = `https://reqres.in/api/users/${id}`;
    return this.http.get<any>(url);
  }
  updateUser(user: IUser): Observable<any> {
    const url = `https://reqres.in/api/users/${user.id}`;
    return this.http.put(url, user, this.httpOptions);
  }
  deleteUser(id: number): Observable<IDataUser> {
    const url = `https://reqres.in/api/users/${id}`
    return this.http.delete<IDataUser>(url, this.httpOptions);
  }
}
