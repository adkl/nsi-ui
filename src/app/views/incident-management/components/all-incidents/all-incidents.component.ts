import { Component, OnInit, ViewChild } from '@angular/core';
import { IncidentsService } from '../../services/incidents/incidents.service';
import { StatusService } from '../../services/status/status.service';
import { PrioritiesService } from '../../services/priorities/priorities.service';
import { ModalComponent } from '../../modal/modal.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SettlementModalComponent } from '../../settlement-modal/settlement-modal.component';
import { Paging } from '../../../../shared/models/paging';

@Component({
  selector: 'app-all-incidents',
  templateUrl: './all-incidents.component.html',
  styleUrls: ['./all-incidents.component.scss']
})
export class AllIncidentsComponent implements OnInit {
  @ViewChild("viewIncidentModal") viewIncidentModal: ModalComponent;
  @ViewChild("viewSettlementModal") viewSettlementModal: SettlementModalComponent;

  public incidents: any = [];
  private sub: any;
  private allStatus: any;
  private allPriorities: any;
  private allTypes: any;
  private allSelectedFilterValues: any;
  private selectedType: any = "none";
  private selectedStatus: any = "none";
  private selectedPriority: any = "none";
  public isLoading: boolean = true;
  public isSolved: any = "Solved";
  public sortDateUp: any;
  public sortPriorityUp: any;
  public sortStatusUp: any;
  public selectedDate: any;
  public allFilters: any = [];

  // Paging config
  public pagingConfig = {
    currentPage: 1,
    itemsPerPage: 5
  };

  constructor(private incidentsService: IncidentsService, private statusService: StatusService, private prioritiesService: PrioritiesService) { }

  ngOnInit() {
    this.incidentsService.getAllIncidents().subscribe(res => {
      this.incidents = res;
      this.getAllStatus();
      this.getAllPriorities();
      this.getAllTypes();
      this.isLoading = false;
    });

  }

  formatDateTime(date: any) {
    let dateType = new Date(date);
    let formatedDateAndTime = dateType.getDate() + "." + (dateType.getMonth() + 1) + "." + dateType.getFullYear() + ", " + ("0" + dateType.getHours()).slice(-2) + ":" + ("0" + dateType.getMinutes()).slice(-2) + "h";
    return formatedDateAndTime;
  }

  loadViewIncidentModal(incident: any) {
    this.viewIncidentModal.openModal(incident);
  }

  getAllStatus(){
    this.statusService.getAllIncidentsStatus().subscribe(res => {
      this.allStatus = res;
    });
  }

  getAllPriorities(){
    this.prioritiesService.getAllIncidentsPriorities().subscribe(res => {
      this.allPriorities = res;
    });
  }

  getAllTypes(){
    this.incidentsService.getAllIncidentTypes().subscribe(res => {
      this.allTypes = res;
    });
  }

  getIncidentsByFilterValue() {
    let filters = [];

    if(this.selectedStatus !== 'none') {
      let filter = {
        filterType: "",
        filterValue: ""
      };
      filter.filterType = "status";
      filter.filterValue = this.selectedStatus.incidentStatusId;
      filters.push(filter);
    }

    if(this.selectedPriority !== 'none') {
      let filter = {
        filterType: "",
        filterValue: ""
      };
      filter.filterType = "priority";
      filter.filterValue = this.selectedPriority.priorityId;
      filters.push(filter);
    }

    if(this.selectedType !== 'none') {
      let filter = {
        filterType: "",
        filterValue: ""
      };
      filter.filterType = "type";
      filter.filterValue = this.selectedType.incidentTypeId;
      filters.push(filter);
    }

    if(this.selectedDate !== undefined && this.selectedDate !== null) {
      let filter = {
        filterType: "",
        filterValue: {}
      };

      let dateFrom = new Date(this.selectedDate[0]);
      dateFrom.setHours(0,0,0,0);

      filter.filterType = "dateFrom";
      filter.filterValue = dateFrom.toISOString();

      filters.push(filter);

      let filter2 = {
        filterType: "",
        filterValue: {}
      };

      let dateTo = new Date(this.selectedDate[1]);
      dateTo.setHours(1,0,0,0);

      filter2.filterType = "dateTo";
      filter2.filterValue = dateTo.toISOString();

      filters.push(filter2);
    }

    this.allFilters = filters;

    if(filters.length > 0) {
      this.incidentsService.getIncidentsByFilterValue(filters).subscribe(res => {
        this.incidents = res;
      });
    }
    else {
      this.incidentsService.getAllIncidents().subscribe(res => {
        this.incidents = res;
      });
    }
  }

  loadSettlementModal(incident: any) {
    this.viewSettlementModal.openModal(incident);
  }


  sortByDate(){
    this.sortDateUp = !this.sortDateUp;
    this.incidentsService.sortIncidents(this.allFilters,"dateCreated", this.sortDateUp).subscribe(res => {
      this.incidents = res;
    });
  }

  sortByStatus(){
    this.sortStatusUp = !this.sortStatusUp;
    this.incidentsService.sortIncidents(this.allFilters,"status", this.sortStatusUp).subscribe(res => {
      this.incidents = res;
    });
  }

  sortByPriority(){
    this.sortPriorityUp = !this.sortPriorityUp;
    this.incidentsService.sortIncidents(this.allFilters, "priority", this.sortPriorityUp).subscribe(res => {
      this.incidents = res;
    });
  }

  updateIncidents(incident) {
    this.incidentsService.getIncidentById(incident.incidentId).subscribe(res => {
      let updatedIncidentIndex = this.incidents.findIndex(helpIncident => helpIncident.incidentId === res.incidentId);
      this.incidents[updatedIncidentIndex] = res;
    });
  }

  clearFields(){
    this.selectedPriority = "none";
    this.selectedStatus = "none";
    this.selectedType = "none";
    this.selectedDate = undefined;
    this.allFilters = [];
    this.incidentsService.getAllIncidents().subscribe(res => {
      this.incidents = res;
    });
  }
}
