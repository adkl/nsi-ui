import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { BsModalService, BsModalRef } from 'ngx-bootstrap'

import { ActionService } from "../../../services/action/action.service";
import { PropertyService } from "../../../services/property/property.service";
import { DeviceTypesService } from "../../../services/device-types/device-types.service";

import { Action } from "../../../models/Action";
import { Property } from "../../../models/Property";
import { DeviceType } from "../../../models/DeviceType";


@Component({
  selector: 'app-device-types-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})

export class IndexDeviceTypes implements OnInit {
  types: any;
  listOfTypes: any;
  modal: BsModalRef

  private deviceTypeSub: Subscription;
  private actionSub: Subscription;
  private propertySub: Subscription;
  private listOfAllDeviceTypesSub: Subscription;

  private page: number = 1;
  private size: number = 3;
  private totalitems: number;
  private deviceType: DeviceType;
  private actions: Action[];
  private properties: Property[];

  public pages: Array<number>;
  public notificationDeleteShow: boolean = false;

  public sortingName: boolean = false;
  public sortingCode: boolean = false;
  public sortingActivity: boolean = false;

  public sortingNameASC:boolean=false;
  public sortingCodeASC:boolean=false;
  public sortingActivityASC:boolean=false;

  selectedOption: number;

  constructor(private deviceTypesService: DeviceTypesService,
    private actionService: ActionService,
    private propertyService: PropertyService,
    private modalService: BsModalService) { }
    private searchString:string='';
    message:string='';
    b:boolean=false;
    private search:boolean=false;
    private filter:boolean=false;
    private activity:boolean=false;

  setPage(i, event: any) {
    event.preventDefault();
    this.page = i;
    if(this.selectedOption == 1){
      this.getActiveDeviceTypes();
    }
    else if(this.selectedOption == 2){
      this.getInactiveDeviceTypes();
    }
    else if(this.search){
      this.searchDeviceTypes(this.searchString);
    }
    else{
      this.getAllPagination();
    }
  }

  ngOnInit() {
    this.listOfAllDeviceTypesSub = this.deviceTypesService.getAll().subscribe(deviceTypes => {
      this.listOfTypes = deviceTypes;
    });
    // initilize action types 
    this.initilizeActions();
    this.initilizeProperties();

    // initilize paginated devices 
    this.getAllPagination();

    //selected value on filter
    this.selectedOption = 0;
  }

  ngOnDestroy() {
    if (this.deviceTypeSub) {
      this.deviceTypeSub.unsubscribe();
      this.actionSub.unsubscribe();
      this.propertySub.unsubscribe();
    }
  }

  initilizeActions() {
    this.actionSub = this.actionService.getAll().subscribe(actions => {
      this.actions = actions;
    })
  }

  initilizeProperties() {
    this.propertySub = this.propertyService.getAll().subscribe(properties => {
      this.properties = properties;
    })
  }

  // Open the modal to create a specific device type 
  openModal(template: TemplateRef<any>) {
    this.modal = this.modalService.show(template, { class: 'modal-lg' });
  }

  closeModal() {
    if(this.modal != undefined) this.modal.hide();
  }

  getAllPagination() {
    this.search = false;
    this.filter = false;
    this.deviceTypesService.getAllPagination(this.page, this.size).subscribe(deviceTypes => {
    this.pagination(deviceTypes);  
    });

    if(this.modal != undefined) this.modal.hide();
  }

  // Initilize device type 
  initilizeDeviceType(deviceTypeId: number, template: TemplateRef<any>) {
    this.deviceTypeSub = this.deviceTypesService.getDeviceTypeById(deviceTypeId).subscribe(deviceType => {
      this.deviceType = deviceType
      this.modal = this.modalService.show(template, { class: 'modal-lg' });
    });
  }

  getActiveDeviceTypes(){
    this.filter = true;
    this.activity = true;
    if(this.search){
      this.deviceTypesService.searchDeviceTypesWithFiltering(this.page,this.size,this.searchString.toString(), true, this.activity).subscribe(devices => {
        this.pagination(devices);
      });
    }
    else{
      this.deviceTypesService.getActiveDeviceTypes(this.page,this.size).subscribe(devices => 
        {
          this.pagination(devices);
        });
    }
  }

  getInactiveDeviceTypes(){
    this.filter = true;
    this.activity = false;
    if(this.search){
      this.deviceTypesService.searchDeviceTypesWithFiltering(this.page,this.size,this.searchString.toString(), true, this.activity).subscribe(devices => {
        this.pagination(devices);
      });
    }
    else{
      this.deviceTypesService.getInactiveDeviceTypes(this.page,this.size).subscribe(devices => {
        this.pagination(devices);
      });
    }
  }

  onFilterDeviceTypesClick(value: number){
    this.page=1;
    if(value==1){
      this.getActiveDeviceTypes();
    }
    else{
      this.getInactiveDeviceTypes();
    }
  }

  pagination(deviceTypes: DeviceType[]){
    this.types = deviceTypes['items'];
    this.totalitems = deviceTypes['total'];

    if(this.totalitems==0){this.message="No results"; this.b=true;}
    else if(this.totalitems!=0){this.b=false; this.message='';}
    
    if (this.totalitems % this.size != 0) {
      this.pages = new Array(Math.ceil(this.totalitems / this.size));
      for (var i = 1; i <= Math.ceil(this.totalitems / this.size); i++) {
        this.pages[i - 1] = i;
      }
    }
    else {
      this.pages = new Array(this.totalitems / this.size);
      for (var j = 1; j <= this.totalitems / this.size; j++) {
        this.pages[j - 1] = j;
      }
    }
  }

  searchDeviceTypes(searchString:string){
    if(searchString !=this.searchString){this.page=1;}
    this.search=true;
    this.searchString=searchString;
    if(this.searchString == ''){ this.getAllPagination();}
    if(this.filter){
      this.deviceTypesService.searchDeviceTypesWithFiltering(this.page,this.size,this.searchString.toString(), true, this.activity).subscribe(devices => {
        this.pagination(devices);
      });
    }
    else{
      this.deviceTypesService.searchDeviceTypes(this.page,this.size,this.searchString.toString()).subscribe(devices => {
        this.pagination(devices);
      });
    }
  }

  sortToggleName() {
    if(this.sortingNameASC) {      
      this.types = this.types.sort((a,b) => a.name < b.name ? 1 : -1)
    } else {
      this.types = this.types.sort((a,b) => a.name > b.name ? 1 : -1)
    }

    this.sortingNameASC = !this.sortingNameASC;
    
    this.sortingName = true;
    this.sortingCode = false;
    this.sortingActivity = false;
  }

  sortToggleCode() {
    if(this.sortingCodeASC) {
      this.types = this.types.sort((a,b) => a.code < b.code ? 1 : -1)
    } else {
      this.types = this.types.sort((a,b) => a.code > b.code ? 1 : -1)
    }

    this.sortingCodeASC = !this.sortingCodeASC;

    this.sortingName = false;
    this.sortingCode = true;
    this.sortingActivity = false;
  }

  sortToggleActivity() {
    if(this.sortingActivityASC) {
      this.types.sort((a,b) => a.isActive < b.isActive ? 1 : -1)
    } else {
      this.types.sort((a,b) => a.isActive > b.isActive ? 1 : -1)
    }

    this.sortingActivityASC = !this.sortingActivityASC;

    this.sortingName = false;
    this.sortingCode = false;
    this.sortingActivity = true;
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
