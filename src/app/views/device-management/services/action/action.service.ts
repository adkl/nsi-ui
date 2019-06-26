import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../../environments/environment';

import { Action } from "../../models/Action"
import { BaseService } from '../base-service/base.service';

@Injectable({
  providedIn: 'root'
})

export class ActionService extends BaseService<Action>{
  private baseUrl = environment.serviceUrl;

  constructor(private httpClient: HttpClient) { 
    super(httpClient);
  }

  public getAll(): Observable<Action[]> {
    return super.get(this.baseUrl + 'api/Action/Get');
  }
}