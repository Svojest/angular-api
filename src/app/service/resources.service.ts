import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDataResource } from '../models/interface';

@Injectable({
  providedIn: 'root',
})
export class ResourcesService {
  constructor(private http: HttpClient) {}

  getResources(): Observable<IDataResource> {
    return this.http.get<any>('https://reqres.in/api/unknown');
  }
}
