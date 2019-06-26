import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IncidentsService {

  private token = sessionStorage.getItem('id_token');
  private options = {
    headers: new HttpHeaders({ 'Authorization': `Bearer ${this.token}` })
  };


  API: any = environment.serviceUrl;
  constructor(private http: HttpClient) {}

  getAllIncidents(): Observable<any> {
    return this.http.get(this.API + '/api/Incident/Get', this.options);
  }

  getIncidentById(id: number): Observable<any> {
    return this.http.get(this.API + '/api/Incident/Get/' + id, this.options);
  }

  getIncidentsByFilterValue(filters: any) {
    const httpOptions = {
      headers: new HttpHeaders ({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`,
      })
    };

    let helpFilterCriteria = [];

    for(let filter of filters) {
      let filterCriteria = {
        columnName: "",
        filterTerm: "",
        isExactMatch: true
      };
      filterCriteria.columnName = filter.filterType;
      filterCriteria.filterTerm = filter.filterValue;
      helpFilterCriteria.push(filterCriteria);
    }

    let body = {
      filterCriteria: helpFilterCriteria
    };
    return this.http.post(this.API + '/api/Incident/SearchIncidents', body , httpOptions);
  }

  sortIncidents(filters: any, columnName: any, order: any) {
    const httpOptions = {
      headers: new HttpHeaders ({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`,
      })
    };

    const sortOrder = order === true ? 1 : 0;

    let helpFilterCriteria = [];

    for(let filter of filters) {
      let filterCriteria = {
        columnName: "",
        filterTerm: "",
        isExactMatch: true
      };
      filterCriteria.columnName = filter.filterType;
      filterCriteria.filterTerm = filter.filterValue;
      helpFilterCriteria.push(filterCriteria);
    }

    let body = {
      filterCriteria: helpFilterCriteria,
      sortCriteria: [
        {
          columnName: columnName,
          order: sortOrder,
          priority: 0
        }
      ]
    };
    return this.http.post(this.API + '/api/Incident/SearchIncidents', body , httpOptions);
  }

  getAllIncidentTypes(){
    return this.http.get(this.API + '/api/IncidentType/Get', this.options);
  }

  getAllWorkOrders(){
    return this.http.get(this.API + '/api/IncidentWorkOrder/Get', this.options);
  }

  getSettlementById(id: number): Observable<any> {
    return this.http.get(this.API + '/api/IncidentSettlement/Get/' + id);
  }

  getDeviceById(id: number): Observable<any> {
    return this.http.get(this.API + '/api/Device/Get/' + id);
  }

  updateIncident(incident: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders ({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`,
      })
    };
    return this.http.put(this.API + '/api/Incident/EditIncident', incident, httpOptions);
  }
  

  localvariable={}

  addSettlements(settlement: any) {
    const httpOptions = {
      headers: new HttpHeaders ({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`,
      })
    };

    return this.http.post<any[]>(this.API + '/api/IncidentSettlement/AddIncidentSettlement', settlement, httpOptions);
  }

  addWorkOrders(workorder: any) {
    const httpOptions = {
      headers: new HttpHeaders ({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`,
      })
    };
    this.http.post<any[]>(this.API + '/api/IncidentWorkOrder/AddIncidentWorkOrder', workorder, httpOptions)
      .subscribe();
  }

  getTenantidentifier(tenantId: number): Observable<any> {
    return this.http.get(this.API + '/api/Tenant/Get/' + tenantId);
  }

}
