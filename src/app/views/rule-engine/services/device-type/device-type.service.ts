import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../base/base.service';

@Injectable({
  providedIn: 'root'
})
export class DeviceTypeService extends BaseService {

  constructor(http: HttpClient) {
    super(http);
  }

  getById(id: Number) {
    return this.get(`DeviceType/Get/${id}`);
  }
}
