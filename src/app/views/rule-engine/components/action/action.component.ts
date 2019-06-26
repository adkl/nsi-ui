import { Component, OnInit, Input } from '@angular/core';
import { DeviceService } from '../../services/device/device.service';
import { Device } from '../../models/Device';
import { DeviceTypeService } from '../../services/device-type/device-type.service';
import { Action } from '../../models/Action';
import { DeviceType } from '../../../device-management/models/DeviceType';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html'
})
export class ActionComponent implements OnInit {
  @Input() action: any;

  devices: Device[] = [];
  actions: Action[] = [];

  constructor(
    private deviceService: DeviceService,
    private deviceTypeService: DeviceTypeService
  ) { }

  ngOnInit() {
    this.deviceService.devices.subscribe(devices => this.devices = devices);
  }

  fetchActions() {
    this
      .deviceTypeService
      .getById(
        this.devices.find(device => device.deviceId === Number(this.action.deviceId)).deviceTypeId
      )
      .subscribe((deviceType: DeviceType) => this.actions = deviceType.actions);
  }
}
