import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../../environments/environment';

import { DeviceType } from "../../models/DeviceType"
import { BaseService } from '../base-service/base.service';


@Injectable({
  providedIn: 'root'
})

export class DeviceTypesService extends BaseService<DeviceType> {
  private baseUrl = environment.serviceUrl;

  constructor(private httpClient: HttpClient) { 
    super(httpClient);
  }

  public getDeviceTypeById(id: number): Observable<DeviceType> {
    return super.getById(this.baseUrl + '/api/DeviceType/Get/', id);
  }

  public getAll(): Observable<DeviceType[]> {
    return super.get(this.baseUrl + 'api/DeviceType/Get');
  } 
  
  public getAllPagination(page:number,size:number): Observable<DeviceType[]>{
    return super.get(this.baseUrl + 'api/DeviceTypes?page='+page+'&size='+size);
  }

  public create(deviceType: DeviceType): Observable<any> {
    return super.post(this.baseUrl + 'api/DeviceType/CreateDeviceType', deviceType);
  }

  public update(deviceType: DeviceType): Observable<any> {
    return super.post(this.baseUrl + 'api/DeviceType/UpdateDeviceType', deviceType);
  }

  public deleteDeviceType(id: number): Observable<any> {
    return super.delete(this.baseUrl + 'api/DeviceType/Delete/', id);
  }

  public searchDeviceTypes(page:number,size:number,searchString:string): Observable<DeviceType[]> {
    return super.get(this.baseUrl + 'api/DeviceTypes/Search?page='+page+'&size='+size+'&s='+encodeURIComponent(searchString));
  }

  public getActiveDeviceTypes(page:number,size:number): Observable<DeviceType[]> {
    return super.get(this.baseUrl + 'api/DeviceTypes/Active?page='+page+'&size='+size);
  }

  public getInactiveDeviceTypes(page:number,size:number): Observable<DeviceType[]> {
    return super.get(this.baseUrl + 'api/DeviceTypes/Inactive?page='+page+'&size='+size);
  }

  public searchDeviceTypesWithFiltering(page:number,size:number,searchString:string, filtered:boolean, active:boolean): Observable<DeviceType[]> {
    return super.get(this.baseUrl + 'api/DeviceTypes/Search?page='+page+'&size='+size+'&s='+encodeURIComponent(searchString)+'&filtered='+filtered+'&active='+active);
  }
}