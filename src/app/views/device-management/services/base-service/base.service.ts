import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class BaseService<T> {
  private token = sessionStorage.getItem('id_token');
  private options = {
    headers: new HttpHeaders({ 'Authorization': `Bearer ${this.token}` })
  };

  constructor(private http: HttpClient) { }

  get(path: string): Observable<T[]> {
    return this.http.get<T[]>(path, this.options);
  }

  getById(path: string, id: number): Observable<T> {
    return this.http.get<T>(path + id, this.options);
  }
  
  post(path: string, item: T): Observable<any> {
    return this.http.post(path, item, this.options);
  }

  delete(path: string, id: number): Observable<any> {
    return this.http.delete(path + id, this.options);
  }

  getNumber(path: string): Observable<number> {
    return this.http.get<number>(path, this.options);
  }
}
