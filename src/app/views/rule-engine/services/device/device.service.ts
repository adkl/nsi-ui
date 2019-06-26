import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Device } from '../../models/Device';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../base/base.service';

@Injectable({
  providedIn: 'root'
})
export class DeviceService extends BaseService {
  public devices = new BehaviorSubject<Device[]>([]);

  constructor(http: HttpClient) {
    super(http);
  }

  fetchAll() {
    this.get('Device/Get').subscribe((devices: Device[]) => this.devices.next(devices));
  }
}
