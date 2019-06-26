import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Device } from '../../models/Device';
import { DeviceService } from '../../services/device/device.service';
import { DeviceType } from '../../models/DeviceType';
import { DeviceTypeService } from '../../services/device-type/device-type.service';
import { Property } from '../../models/Property';

@Component({
  selector: 'app-condition',
  templateUrl: './condition.component.html'
})
export class ConditionComponent implements OnInit {
  @Input() condition: any;
  @Output() deleted = new EventEmitter();

  devices: Device[] = [];

  properties: Property[] = [];

  constructor(
    private deviceService: DeviceService,
    private deviceTypeService: DeviceTypeService
  ) { }

  ngOnInit() {
    this.deviceService.devices.subscribe(devices => this.devices = devices);
  }

  findDeviceType() {
    this
      .deviceTypeService
      .getById(
        this.devices.find(device => device.deviceId === Number(this.condition.deviceId)).deviceTypeId
      )
      .subscribe((deviceType: DeviceType) => this.properties = deviceType.properties);
  }
}
