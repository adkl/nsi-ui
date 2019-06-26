import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from "@angular/core";
import { StatusService } from '../services/status/status.service';
import { PrioritiesService } from '../services/priorities/priorities.service';
import {IncidentsService} from '../services/incidents/incidents.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @ViewChild("myModal") modal: any;

  @Output()
  changed = new EventEmitter<any>();

  public myModal;
  incident: any;
  openMyModal: boolean = false;
  disableSelect: boolean = true;
  allStatus: any;
  selectedStatus: any;
  allPriorities: any;
  selectedPriority: any;
  isLoading: boolean = false;
  private allWorkOrders: any;
  settlement: any;

  constructor(private incidentsService: IncidentsService, private statusService: StatusService, private prioritiesService: PrioritiesService) { }

  ngOnInit() {
    /*this.incidentsService.getAllWorkOrders().subscribe(res => {
      this.allWorkOrders = res;
    });*/
  }

  ngAfterViewInit() {
    
    this.statusService.getAllIncidentsStatus().subscribe(res => {
      this.allStatus = res;
    });
    this.prioritiesService.getAllIncidentsPriorities().subscribe(res => {
      this.allPriorities = res;
    });
  }


  /*returnSettlement(id: any){
    this.allWorkOrders.forEach(element => {
      if(element.incidentId==id)
      {
        console.log(element);
        /*this.incidentsService.getSettlementById(element.incidentSettlementId).subscribe(res => {
          this.settlement = res;
        });*/
      /*}
      return true;
    });
    
  }*/

  formatDateTime(date: any) {
    let dateType = new Date(date);
    let formatedDateAndTime = dateType.getDate() + "." + (dateType.getMonth() + 1) + "." + dateType.getFullYear() + ", " + ("0" + dateType.getHours()).slice(-2) + ":" + ("0" + dateType.getMinutes()).slice(-2)  + "h";
    return formatedDateAndTime;
  }

  getIncident(incident) {
      this.incident = incident;
      if(incident.incidentStatus.name == "Solved") { this.disableSelect = false; }
      else this.disableSelect = true;
      this.selectedStatus = incident.incidentStatus;
      this.selectedPriority = incident.priority;
      this.openMyModal = true;
      this.modal.show();
  }

  openModal(incident: any) {
    this.getIncident(incident);
  }

  changesSaved(incident) {
    this.changed.emit(incident);
  }

  saveChanges(incident: any){
    let updateIncident = {
      incidentId: incident.incidentId,
      dateCreated: incident.dateCreated,
      createdBy: incident.createdBy,
      modifiedBy: 6,
      dateModified: incident.dateModified,
      tenantId: incident.tenant.id,
      incidentStatus: this.selectedStatus.incidentStatusId,
      deviceId: incident.device.deviceId,
      priority: this.selectedPriority.priorityId,
      incidentType: incident.incidentType.incidentTypeId,
      reporterId: incident.reporter.id,
      assigneeId: incident.assignee.id,
      id: incident.id
    };
    this.isLoading = true;
    this.openMyModal = false;
    if(incident.incidentStatus.name=="Solved") { this.disableSelect = false;}
    this.incidentsService.updateIncident(updateIncident).subscribe(updatedIncident => {
      this.incidentsService.getIncidentById(updateIncident.incidentId).subscribe(incident => {
          this.incident = incident;
          this.isLoading = false;
          this.openMyModal = true;
          this.changesSaved(incident);
      });
    });
    this.modal.hide();
  }

}
