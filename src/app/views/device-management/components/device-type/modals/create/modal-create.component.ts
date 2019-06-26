import {
  Component,
  OnInit,
  OnChanges,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Subscription } from 'rxjs';

import { DeviceTypesService } from "../../../../services/device-types/device-types.service";

import { Action } from '../../../../models/Action';
import { Property } from '../../../../models/Property';
import { DeviceType } from '../../../../models/DeviceType';

@Component({
  selector: 'app-create-device-type',
  templateUrl: './modal-create.component.html',
  styleUrls: ['./modal-create.component.scss']
})

export class CreateDeviceType implements OnInit {

  deviceTypeForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
    code: new FormControl("", [Validators.required, Validators.minLength(2), Validators.maxLength(5), ValidateUniqueDeviceTypeCode.bind(this)]),
    actions: new FormControl(),
    properties: new FormControl()
  });

  actionDropdownSettings = {};
  propertyDropdownSettings = {};

  selectedActions: Action[];
  selectedProperties: Action[];

  private deviceType: DeviceType;
  private createDeviceTypeSub: Subscription;

  @Input() actions;
  @Input() properties;
  @Input() listOfTypes;
  @Output() deviceTypeActioned = new EventEmitter();
  @Output() canceledCreating = new EventEmitter();

  submitted = false;

  constructor(private deviceTypesService: DeviceTypesService) { }

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
  }

  onCreate() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.deviceTypeForm.invalid) {
      return;
    }
    else {
      const data = this.deviceTypeForm.value;

      this.deviceType = new DeviceType(
        null,
        data.name,
        data.code,
        data.actions ? data.actions : [],
        data.properties ? data.properties : [],
        true
      );

      this.createDeviceTypeSub = this.deviceTypesService.create(this.deviceType).subscribe(success => {
        this.deviceTypeActioned.emit();
      });
    }
  }

  cancelCreating() {
    this.canceledCreating.emit();
  }

  // convenience getter for easy access to form fields
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