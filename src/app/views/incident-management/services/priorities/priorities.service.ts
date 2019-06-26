import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PrioritiesService {
  API: any = environment.serviceUrl;

  private token = sessionStorage.getItem('id_token');
  private options = {
    headers: new HttpHeaders({ 'Authorization': `Bearer ${this.token}` })
  };

  constructor(private http: HttpClient) {}

  getAllIncidentsPriorities(): Observable<any> {
    return this.http.get(this.API + '/api/IncidentPriority/Get', this.options);
  }
}
