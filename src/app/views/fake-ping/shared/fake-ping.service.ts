import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FakePing } from './fake-ping.model';
import { DeviceProperty } from './device-property-value.model';
import { PropertyFull } from './property-full.model';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { BaseService } from '../base-service/base.service';
@Injectable()
export class FakePingService extends BaseService<FakePing> {
  private baseUrl = environment.serviceUrl;

  constructor(private httpClient: HttpClient) { 
  super(httpClient)
  }

  public getAll(): Observable<FakePing[]> {
  return super.get(this.baseUrl + 'api/Device/Get');
}

  public getLastPinged(propertyId: number): Observable<any> {
     return super.get(this.baseUrl + 'api/DevicePing/GetLastValue/' + propertyId);
  }

  public sendMessage(message){
  console.log(message);
      return this.httpClient.get(this.baseUrl + '/api/DevicePing/SendLogMessage/' + message);

  }
}