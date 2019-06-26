import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { FormControl } from '@angular/forms';

import { DeviceService } from "../../../services/device/device.service";
import { DeviceTypesService } from '../../../services/device-types/device-types.service';

import { Device } from "../../../models/Device";
import { DeviceType } from "../../../models/DeviceType";

@Component({
  selector: 'app-device-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})

export class IndexDevices implements OnInit {
  devices: Device[];
  types: DeviceType[];
  modal: BsModalRef;

  device: Device;
  private page:number=1;
  private size:number = 6;
  private totalitems:number;
  private deviceSub: Subscription;
  private deviceTypeSub: Subscription;
  private createDeviceSub: Subscription;
  private searchString:string='';
  message:string='';
  b:boolean=false;
  selectedOption: number;
  private search:boolean=false;
  private filter:boolean=false;
  private activity:boolean=false;

  public pages:Array<number>;
  public notificationDeleteShow:boolean=false;

  constructor(private deviceService: DeviceService, private deviceTypesService: DeviceTypesService, private modalService: BsModalService) {}
  
  setPage(i,event:any){
    event.preventDefault();
    this.page =i;
    if(this.selectedOption == 1){
      this.getActiveDevices();
    }
    else if(this.selectedOption == 2){
      this.getInactiveDevices();
    }
    else if(this.search){
      this.searchdevices(this.searchString);
    }
    else{
      this.getAllPagination();
    }
  }
  
  ngOnInit() {
    this.initilizeDeviceTypes()
    //this.initilizeDevices()
    this.getAllPagination();
    this.selectedOption = 0;
  }

  ngOnDestroy() {
    if (this.deviceSub) {
      this.deviceSub.unsubscribe();
    }
  }

  // Initilize devices 
  initilizeDeviceTypes() {
    this.deviceTypeSub = this.deviceTypesService.getAll().subscribe(deviceTypes => {
      this.types = deviceTypes;
    });
  }

  initilizeDevices() {
    this.deviceSub = this.deviceService.getAll().subscribe(devices => {
      this.devices = devices;
      this.initializeNumberOfIncidents();
      if(this.modal != undefined) this.modal.hide();
    }); 
  }

  // Catch emit from create or update 
  catchAction() {
    this.getAllPagination();
  }

  // Open the modal to create a specific device type 
  openModal(template: TemplateRef<any>) {
    this.modal = this.modalService.show(template, { class: 'modal-lg' });
  }

  // Initilize the device for show & edit
  initilizeDevice(deviceId: number, template: TemplateRef<any>) {
    this.deviceSub = this.deviceService.getDeviceById(deviceId).subscribe(device => {
      this.device = device
      this.modal = this.modalService.show(template, { class: 'modal-lg' });
    });
  }

  getAllPagination(){
    this.search = false;
    this.filter = false;
    this.deviceService.getAllPagination(this.page,this.size).subscribe(devices => {
      this.pagination(devices);
    });
  }

  getActiveDevices(){
    this.filter = true;
    this.activity = true;
    if(this.search){
      this.deviceService.searchDevicesWithFiltering(this.page,this.size,this.searchString.toString(), true, this.activity).subscribe(devices => {
        this.pagination(devices);
      });
    }
    else{
      this.deviceService.getActiveDevices(this.page,this.size).subscribe(devices => 
        {
          this.pagination(devices);
        });
    }
  }

  getInactiveDevices(){
    this.filter = true;
    this.activity = false;
    if(this.search){
      this.deviceService.searchDevicesWithFiltering(this.page,this.size,this.searchString.toString(), true, this.activity).subscribe(devices => {
        this.pagination(devices);
      });
    }
    else{
      this.deviceService.getInactiveDevices(this.page,this.size).subscribe(devices => {
        this.pagination(devices);
      });
    }
  }

  onFilterDevicesClick(value: number){
    this.page=1;
    if(value==1){
      this.getActiveDevices();
    }
    else{
      this.getInactiveDevices();
    }
  }

  pagination(devices: Device[]){
      this.devices = devices['items'];
      this.totalitems=devices['total'];
      this.initializeNumberOfIncidents();
      
      if(this.totalitems==0){this.message="No results"; this.b=true;}
      else if(this.totalitems!=0){this.b=false; this.message='';}
      
      if(this.totalitems % this.size != 0){
        this.pages = new Array(Math.ceil(this.totalitems/this.size));
        for (var i = 1; i <= Math.ceil(this.totalitems/this.size); i++) {
          this.pages[i-1]=i;      
        }
      }
      else{
        this.pages = new Array (this.totalitems/this.size);
        for (var j = 1; j <= this.totalitems/this.size; j++) {
          this.pages[j-1]= j;
       }
      }
      
      if(this.modal != undefined) this.modal.hide();
  }
  
  searchdevices(searchString:string){
    if(searchString !=this.searchString){this.page=1;}
    this.search = true;
    this.searchString = searchString;
    if(this.searchString == ''){ this.getAllPagination();}
    if(this.filter){
      this.deviceService.searchDevicesWithFiltering(this.page,this.size,this.searchString.toString(), true, this.activity).subscribe(devices => {
        this.pagination(devices);
      });
    }
    else{
      this.deviceService.searchDevices(this.page,this.size,this.searchString.toString()).subscribe(devices => {
        this.pagination(devices);
      });
    }
  }

  initializeNumberOfIncidents(){
    for (let device of this.devices) {
      this.deviceService.getNumberOfIncidents(device.deviceId, 7).subscribe(numOfIncidents => {
        device.numberOfIncidents = numOfIncidents;
      });
    }
  }

  closeModal(){
    if(this.modal != undefined) this.modal.hide();
  }

  // show the delete notifiction
  notificationDelete() {
    this.notificationDeleteShow = true;

    setTimeout(() => {
      this.notificationDeleteShow = false;
    }, 4000)

    this.closeModal();
  }
}

