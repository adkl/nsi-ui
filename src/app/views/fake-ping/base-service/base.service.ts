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

  getProperties(path: string, id: number): Observable<T> {
    return this.http.get<T>(path + id, this.options);
  }

  getValue(path: string, id: number): Observable<T> {
    return this.http.get<T>(path + id, this.options);
  }
  
}
