import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ArrayResponse, ObjectResponse } from '../models/dto/Response';
import 'rxjs/add/operator/share';

export class BaseService<T> {
  private token = sessionStorage.getItem('id_token');
  private httpHeaders = { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + this.token }) };

  readonly apiSubPath = 'api/';
  readonly baseUrl = environment.serviceUrl + this.apiSubPath;
  constructor(private http: HttpClient) { }

  protected get(path: string): Observable<ObjectResponse<T>> {
    return this
      .http
      .get<ObjectResponse<T>>(this.baseUrl + path, this.httpHeaders);
  }

  protected download(path: string) {

    const httpHeaders = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.token,
        'Accept': 'text/plain'
      }),
      'responseType': 'blob' as 'blob'
    };

    return this
      .http
      .get(this.baseUrl + path, httpHeaders).share();
  }

  protected getAll(path: string): Observable<ArrayResponse<T>> {
    return this
      .http
      .get<ArrayResponse<T>>(this.baseUrl + path, this.httpHeaders);
  }

  protected post(path: string, data: T): Observable<ObjectResponse<T>> {
    return this
      .http
      .post<ObjectResponse<T>>(path, data, this.httpHeaders);
  }

  protected delete(path: string) {
    return this.http.delete(path, this.httpHeaders);
  }
}
