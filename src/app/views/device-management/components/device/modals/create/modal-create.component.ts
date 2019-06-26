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
import { DocumentService } from "../../../../../document-repository/entities/document-services/document.service";

import { Device } from "../../../../models/Device";

@Component({
  selector: 'app-create-device',
  templateUrl: './modal-create.component.html',
  styleUrls: ['./modal-create.component.scss']
})

export class CreateDevice implements OnInit {

  device: Device;
  document: Document;
  selectedFile: File;
  imageShow: any= '';
  fileName:string; 
  filePath:string; 
  id:any;
  deviceForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
    description: new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(250)]),
    deviceTypeId: new FormControl(0, [ValidateDeviceType])
  });

  submitted = false;

  private createDeviceSub: Subscription;

  constructor(private deviceService: DeviceService, private documentService: DocumentService) { }

  @Input() types; 
  @Output() deviceActioned = new EventEmitter();
  @Output() canceledCreating = new EventEmitter();


  ngOnInit() { 
    this.types = this.types.filter(x => x.isActive);
  }

onFileChanged(event) {
  this.selectedFile = event.target.files[0]
  var reader = new FileReader();
  reader.readAsDataURL(event.target.files[0]);
  reader.onload = (event) => {
   this.imageShow = (<FileReader>event.target).result;
 }
 this.fileName = this.selectedFile.name;
}

  onCreate() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.deviceForm.invalid) {
      return;
    }
    else {
    const data = this.deviceForm.value;
    this.uploadFile(this.selectedFile).then(()=>{
      this.documentService.getFileById(this.id).subscribe((res) => {
        this.filePath = res['path'];
        this.device = new Device (
          null,
          data.name,
          data.description,
          Number(data.deviceTypeId),
          true,
          this.filePath
        )
        
        this.createDeviceSub = this.deviceService.createDevice(this.device).subscribe(success => {
          this.deviceActioned.emit()
        })
            });
    });
   
    }   
  }

  uploadFile(selectedFile:File){
  let formDataInput = new FormData();
  formDataInput.append("file", selectedFile);
  return this.documentService.addDocument(formDataInput).then((res)=>{this.id= res;});
}
  // convenience getter for easy access to form fields
  get f() { return this.deviceForm.controls; }

  cancelCreating(){
    this.canceledCreating.emit();
  }
  
}

function ValidateDeviceType(control: AbstractControl) {
  if (control.value < 0 || control.value == 0) {
    return { validDeviceType: true };
  }
  return null;
  }
