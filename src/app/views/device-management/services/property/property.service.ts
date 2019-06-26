import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../../environments/environment';

import { Property } from "../../models/Property"
import { BaseService } from '../base-service/base.service';

@Injectable({
  providedIn: 'root'
})

export class PropertyService extends BaseService<Property>{
  private baseUrl = environment.serviceUrl;

  constructor(private httpClient: HttpClient) { 
    super(httpClient);
  }

  public getAll(): Observable<Property[]> {
    return super.get(this.baseUrl + 'api/Property/Get');
  }
}