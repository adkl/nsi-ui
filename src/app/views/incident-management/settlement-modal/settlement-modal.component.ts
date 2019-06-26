import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from "@angular/core";
import { NotificationService } from '../../../shared/services/notification.service';
import {IncidentsService} from '../services/incidents/incidents.service';

@Component({
  selector: 'app-settlement-modal',
  templateUrl: './settlement-modal.component.html',
  styleUrls: ['./settlement-modal.component.scss']
})
export class SettlementModalComponent implements OnInit {

  @ViewChild("myModal1") modal: any;

  @Output()
  changed = new EventEmitter<any>();

  public myModal;
  incident: any;
  changeStatus: number = 4;
  changePriority: number = 2;
  notification: any;

  notificationContent: string= "Proba...";
  notificationTitle: string = "Incident resolved";
  notificationStatusId: number = 3;
  notificationTypeId: number = 6;

  incidentStatusId: number = 1;
  id: number = 0;

  constructor(private notificationService: NotificationService, private incidentsService: IncidentsService) { }

  ngOnInit() {
    //console.log("blaaaa");
  }

  openModalSettlement(incident: any) {
    this.getIncident(incident);
  }

  getIncident(incident) {
    this.incident = incident;
    this.modal.show();
  }

  openModal(incident: any) {
    this.getIncident(incident);
  }

  changesSaved(incident) {
    this.changed.emit(incident);
  }

  sendNotification(notificationContent: any, incident: any){
    let dateNow = new Date();
    let addNotification = {
      content: this.notificationContent,
      externalID: incident.tenant.identifier,
      title: this.notificationTitle,
      notificationStatusId: this.notificationStatusId,
      notificationTypeId: this.notificationTypeId
    };

    this.notificationService.addNotifications(addNotification);
   
    let updateIncident = {
      incidentId: incident.incidentId,
      incidentStatus: this.changeStatus,
      dateCreated: incident.dateCreated,
      createdBy: incident.createdBy,
      modifiedBy: 6,
      dateModified: incident.dateModified,
      tenantId: incident.tenant.id,
      deviceId: incident.device.deviceId,
      priority: this.changePriority,
      incidentType: incident.incidentType.incidentTypeId,
      reporterId: incident.reporter.id,
      assigneeId: incident.assignee.id,
      id: incident.id
    };

    this.incidentsService.updateIncident(updateIncident).subscribe(updatedIncident => {
      this.changesSaved(updateIncident);

      let settlement = {
        description: this.notificationTitle,
        fullText: this.notificationContent,
        dateSettled: dateNow,
        dateCreated: dateNow,
        modifiedBy: 6,
        dateModified: dateNow,
        tenantId: incident.tenant.id,
        incidentStatusId: this.incidentStatusId,
        id: this.id
      };

      this.incidentsService.addSettlements(settlement).subscribe(id => {
        let workorder = {
          dateCreated: dateNow,
          createdBy: 6,
          modifiedBy: 6,
          dateModified: dateNow,
          tenantId: incident.tenant.id,
          incidentId: Number(incident.incidentId),
          incidentSettlementId: id,
          id: this.id
        };

        this.incidentsService.addWorkOrders(workorder);
      });

      this.modal.hide();
      window.confirm('Your message has been successfully sent.');
    });
  }

}
