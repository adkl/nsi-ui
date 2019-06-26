import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FakePing } from './fake-ping.model';
import { DeviceProperty } from './device-property-value.model';
import { PropertyFull } from './property-full.model';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { BaseService } from '../base-service/base.service';

@Injectable()
export class PropertyFullService extends BaseService<PropertyFull> {
  private baseUrl = environment.serviceUrl;

  constructor(private httpClient: HttpClient) { 
  	super(httpClient)
  }

  public getAllProperties(): Observable<PropertyFull[]> {
      return super.get(this.baseUrl + 'api/Property/Get');
  }
}