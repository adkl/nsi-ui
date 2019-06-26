import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../../environments/environment';

import { Device } from "../../models/Device"
import { BaseService } from '../base-service/base.service';

@Injectable({
  providedIn: 'root'
})

export class DeviceService extends BaseService<Device>{
  private baseUrl = environment.serviceUrl;

  constructor(private httpClient: HttpClient) { 
    super(httpClient);
  }

  public getDeviceById(id: number): Observable<Device> {
    return super.getById(this.baseUrl + '/api/Device/Get/', id);
  }

  public getAll(): Observable<Device[]> {
    return super.get(this.baseUrl + 'api/Device/Get');
  } 

  public createDevice(device: Device): Observable<any> {
    return super.post(this.baseUrl + 'api/Device/CreateDevice', device);
  }

  public update(device: Device): Observable<any> {
    return super.post(this.baseUrl + 'api/Device/UpdateDevice', device);
  }

  public deleteDevice(id: number): Observable<any> {
    return super.delete(this.baseUrl + 'api/Device/Delete/', id);
  }

  public getAllPagination(page:number,size:number): Observable<Device[]>{
    return super.get(this.baseUrl + 'api/Devices?page='+page+'&size='+size);
  }

  public getActiveDevices(page:number,size:number): Observable<Device[]> {
    return super.get(this.baseUrl + 'api/Devices/Active?page='+page+'&size='+size);
  }

  public getInactiveDevices(page:number,size:number): Observable<Device[]> {
    return super.get(this.baseUrl + 'api/Devices/Inactive?page='+page+'&size='+size);
  }

  public searchDevices(page:number,size:number,searchString:string): Observable<Device[]> {
    return super.get(this.baseUrl + 'api/Devices/Search?page='+page+'&size='+size+'&s='+encodeURIComponent(searchString));
  }

  public searchDevicesWithFiltering(page:number,size:number,searchString:string, filtered:boolean, active:boolean): Observable<Device[]> {
    return super.get(this.baseUrl + 'api/Devices/Search?page='+page+'&size='+size+'&s='+encodeURIComponent(searchString)+'&filtered='+filtered+'&active='+active);
  }

  public getNumberOfIncidents(deviceId:number, periodInDays:number){
    return super.getNumber(this.baseUrl+ 'api/Device/GetNumberOfIncidents?deviceId='+deviceId+'&periodInDays='+periodInDays);
  }
}