import { 
  Component, 
  OnInit, 
  OnChanges,
  Input, 
  Output, 
  EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Subscription } from 'rxjs';

import { DeviceService } from "../../../../services/device/device.service";

import { Device } from "../../../../models/Device";
import { DeviceType } from '../../../../models/DeviceType';

@Component({
  selector: 'app-edit-device',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.scss']
})

export class EditDevice implements OnInit {
  deviceForm = new FormGroup({});

  editedDevice: Device;

  private editDeviceSub: Subscription;
  private deleteDeviceSub: Subscription;

  constructor(private deviceService: DeviceService) { }

  @Input() types; 
  @Input() device; 
  @Output() deviceActioned = new EventEmitter();
  @Output() deviceDeleted = new EventEmitter();
  @Output() canceledEditing = new EventEmitter();

  submitted = false;

  ngOnInit() { 
    this.types = this.types.filter(x => x.isActive);
  }

  ngOnChanges() {
    this.deviceForm = new FormGroup({
      name: new FormControl(this.device.name, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
      description: new FormControl(this.device.description, [Validators.required, Validators.minLength(5), Validators.maxLength(250)]),
      deviceTypeId: new FormControl(this.device.deviceTypeId, [ValidateDeviceType])
    });
  }

  onSave() {

    this.submitted = true;
    // stop here if form is invalid
    if (this.deviceForm.invalid) {
      return;
    }
    else {
    const data = this.deviceForm.value;

    this.editedDevice = new Device (
      this.device.deviceId,
      data.name,
      data.description,
      Number(data.deviceTypeId),
      true,
      this.device.deviceImage
    )
    
    this.editDeviceSub = this.deviceService.update(this.editedDevice).subscribe(success => {
      this.deviceActioned.emit()
    })
  }
  }

  onDelete() {
    if(window.confirm('Are you sure you want to delete this device?')) {
      this.deleteDeviceSub = this.deviceService.deleteDevice(this.device.deviceId).subscribe(success => {
        this.deviceActioned.emit();
        this.deviceDeleted.emit();
      })
    }
  }

  // convenience getter for easy access to form fields
  get f() { return this.deviceForm.controls; }

  cancelEditing(){
    this.canceledEditing.emit();
  }
}

function ValidateDeviceType(control: AbstractControl) {
  if (control.value < 0 || control.value == 0) {
    return { validDeviceType: true };
  }
  return null;
  }
