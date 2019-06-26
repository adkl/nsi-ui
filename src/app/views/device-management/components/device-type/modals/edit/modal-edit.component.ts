import {
  Component,
  OnInit,
  OnChanges,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { DeviceTypesService } from "../../../../services/device-types/device-types.service";

import { Action } from '../../../../models/Action';
import { Property } from '../../../../models/Property';
import { DeviceType } from '../../../../models/DeviceType';

@Component({
  selector: 'app-edit-device-type',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.scss']
})

export class EditDeviceType implements OnInit {
  deviceTypeForm = new FormGroup({});
  actionDropdownSettings = {};
  propertyDropdownSettings = {};

  editedDeviceType: DeviceType;

  selectedActions: Action[];
  selectedProperties: Action[];

  submitted = false;

  private editDeviceTypeSub: Subscription;
  private deleteDeviceTypeSub: Subscription;

  constructor(private deviceTypesService: DeviceTypesService) { }

  @Input() deviceType;
  @Input() actions;
  @Input() properties;
  @Input() listOfTypes;
  @Output() deviceTypeActioned = new EventEmitter();
  @Output() deviceTypeDeleted = new EventEmitter();
  @Output() canceledEditing = new EventEmitter();

  ngOnInit() {
    this.actionDropdownSettings = {
      singleSelection: false,
      idField: 'actionId',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

    this.propertyDropdownSettings = {
      singleSelection: false,
      idField: 'propertyId',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

    this.deviceTypeForm = new FormGroup({
      name: new FormControl(this.deviceType.name, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
      code: new FormControl(this.deviceType.code, [Validators.required, Validators.minLength(2), Validators.maxLength(5), ValidateUniqueDeviceTypeCode.bind(this)]),
      actions: new FormControl(this.deviceType.actions),
      properties: new FormControl(this.deviceType.properties)
    });
  }

  onSave() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.deviceTypeForm.invalid) {
      return;
    }
    else {
      const data = this.deviceTypeForm.value;

      this.editedDeviceType = new DeviceType(
        this.deviceType.deviceTypeId,
        data.name,
        data.code,
        data.actions,
        data.properties,
        this.deviceType.isActive
      );

      this.editDeviceTypeSub = this.deviceTypesService.update(this.editedDeviceType).subscribe(success => {
        this.deviceTypeActioned.emit();
      });
    }
  }

  onDelete() {
    if (window.confirm('Are you sure you want to delete this device?')) {
      this.deleteDeviceTypeSub = this.deviceTypesService.deleteDeviceType(this.deviceType.deviceTypeId).subscribe(success => {
        this.deviceTypeActioned.emit();
        this.deviceTypeDeleted.emit();
      })
    }
  }

  cancelEditing() {
    this.canceledEditing.emit();
  }
  
  get f() { return this.deviceTypeForm.controls; }
}

function ValidateUniqueDeviceTypeCode(control: AbstractControl) {
  if (control.value != "") {
    for (let type of this.listOfTypes) {
      if (control.value == type.code) {
        return { notUniqueCode: true };
      }
    }
  }
  return null;
}
