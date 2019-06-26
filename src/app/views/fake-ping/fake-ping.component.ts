import { Component, OnInit, OnDestroy, Renderer2, ElementRef} from '@angular/core';
import { FakePingService } from './shared/fake-ping.service';
import { FakePing } from './shared/fake-ping.model';
import { DeviceProperty } from './shared/device-property-value.model';
import { Property } from './shared/property.model';
import { PropertyFull } from './shared/property-full.model';
import { Subscription } from 'rxjs';
import { PropertyFullService } from './shared/property-full.service';

@Component({
 templateUrl: './fake-ping.component.html'
})

export class FakePingComponent implements OnInit {
    public pings: FakePing[];
    public Filteredpings: FakePing[];
    public properties: PropertyFull[];
    private fakePingSub: Subscription;
    public activeDevices: Array<FakePing> = [];
    public inactiveDevices: Array<FakePing> = [];
    public allDevices: Array<FakePing> = [];
    public propertyId: number;
    public propertyValue: string;

    public dpValue: DeviceProperty = {
      deviceId: 0,
      name: "",
      isActive: true,
      deviceProperties: [],
      dateCreated: ""
    };

  constructor(private fakePingService: FakePingService, private propertyFullService: PropertyFullService,private renderer:Renderer2, private el: ElementRef) { }

  addField(deviceId: number)  {

    const div = this.renderer.createElement('div');
    const div1 = this.renderer.createElement('div');
    const text = this.renderer.createText(this.dpValue.name);
    const div2 = this.renderer.createElement('div');
    const value1 = this.renderer.createText(this.propertyValue);

    this.renderer.appendChild(div, div1);
    this.renderer.appendChild(div1, text);
    this.renderer.appendChild(div, div2);
    this.renderer.appendChild(div2, value1);

    this.renderer.addClass(div, 'form-group');
    this.renderer.addClass(div, 'row');
    this.renderer.addClass(div1, 'col-md-6');
    this.renderer.addClass(div2, 'col-md-6');

    const textboxes = document.getElementById(deviceId.toString());

    this.renderer.appendChild(textboxes, div);

    this.addNewProperty(this.propertyId, this.propertyValue);
    
  }

  findNameById(propId: number){
    for (var i = 0; i < this.properties.length; i++) {
          if (this.properties[i].propertyId == propId){ 
            this.dpValue.name = this.properties[i].name;
          }  
        }
  }

  addNewProperty(propId:number, propValue: string){
    this.dpValue.deviceProperties.push(new Property(propId, propValue));
  }
    
  private _searchTerm: string;
  get searchTerm(): string {
    return this._searchTerm;
  }
  set searchTerm(value: string){
    this._searchTerm = value;
    this.pings = this.filterPings(value);
  }

  ping: FakePing = new FakePing(0,"","", true);

   ngOnInit() {
     this.fakePingSub = this.fakePingService.getAll().subscribe(fakePings => {
       this.pings = fakePings;
       this.allDevices = fakePings;
       this.Filteredpings = this.pings;
     });

     this.fakePingSub = this.propertyFullService.getAllProperties().subscribe(result => {
       this.properties = result;
     });
     
  }
   collectData(event: any, name: string){
    this.propertyId = event.target.value;
    this.findNameById(event.target.value);
    this.fakePingService.getLastPinged(this.propertyId).subscribe(
       data => {       
       (<HTMLInputElement>document.getElementById(name)).value = data;
       this.propertyValue = data;
    },
    error => {
       console.log(error);
    });
   }

   focusOut(event: any){
    this.propertyValue = event.target.value;
   }

   pingDevice(deviceId){
    this.dpValue.deviceId = deviceId;
    var d = new Date();
    this.dpValue.dateCreated = d.toString();

    //console.log(JSON.stringify(this.dpValue));
    
    this.fakePingService.sendMessage(JSON.stringify(this.dpValue));

    this.clearData();
   }

   clearData(){
    this.propertyId = 0;
    this.dpValue.deviceId = 0;
    this.dpValue.name = "";
    this.dpValue.isActive = true;
    this.propertyValue = "";
    this.dpValue.dateCreated = "";
    this.dpValue.deviceProperties = [];
   }

  filterPings(searchText: string){
    return this.Filteredpings.filter((ping: FakePing) =>
    ping.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
  }
  
  onFilterChange(newValue: string) {
   if(newValue=="Ascending"){
   this.pings.sort((a,b) => 0 - (a.name > b.name ? -1 : 1));
   }
   else
   {
   this.pings.sort((a,b) => 0 - (a.name < b.name ? -1 : 1));
  }}

  onFilterChanged(value: string){
    if(value == "Active"){
      for (var i = 0; i < this.allDevices.length; i++) {
        if (this.allDevices[i].isActive){ 
          this.activeDevices.push(this.allDevices[i]);
        }
        else{
          this.inactiveDevices.push(this.allDevices[i]);
        }   
      }

      this.pings = this.activeDevices;
    }
    else if(value == "Inactive"){
      this.pings = this.inactiveDevices;
    }
    else{
      this.pings = this.allDevices;
    }
  } 

 }