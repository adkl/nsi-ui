import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-device-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class DeviceCard implements OnInit {
  status: any

  constructor() { }

  @Input() device;

  ngOnInit() {
    this.status = (this.device.deviceStatus.name == "Dead")
                  ? 'hr-danger' 
                  : (this.device.deviceStatus.name == "New")
                    ? 'hr-primary'
                    : 'hr-success'
  }
}