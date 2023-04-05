import { Injectable } from '@angular/core';
import { IAccount } from '../models/interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  public user: Observable<IAccount | null>;

  constructor(
    private http: HttpClient
  ) {}

  login(email: string, password: string) {
    return this.http.post<IAccount>('https://reqres.in/api/login', { email, password })
  }
  register(email: string, password: string) {
    return this.http.post<IAccount>('https://reqres.in/api/register', { email, password })
}
}
