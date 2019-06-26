import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment.dev';

@Component({
  selector: 'app-device-incidents-specific-time-period',
  templateUrl: './device-incidents-specific-time-period.component.html',
  styleUrls: ['./device-incidents-specific-time-period.component.scss']
})
export class DeviceIncidentsSpecificTimePeriodComponent implements OnInit {

  // @ViewChild('appfilterpicker') appfilterpicker: FilterPickerComponent;

  showReport: boolean = false;
  allIncidents: any = [];
  deviceIncidents: any = [];
  filterCount: number = 0;

  public secondPieChartLabels: string[] = [];
  public secondPieChartLabel: string = "";
  public secondPieChartData: any[] = [];
  public secondPieChartType = 'bar';

  public allLabels: string[] = [];

  refreshResultInit: Function = (filterCount: any) => {
    let token = sessionStorage.getItem('id_token');

    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        'Authorization': 'Bearer ' + token
      }),
      params: new HttpParams()
        .set('count', filterCount)
    };

    this.httpClient.get(environment.serviceUrl+'api/Reporting/GetFrequentDevices', options).subscribe(result => {
      this.allIncidents = result;

      this.showReport = result instanceof Array ? result.length != 0 : false;

      if(this.showReport){
        this.secondPieChartData = [];
        this.secondPieChartLabels = [];
        
        let incidentsData = this.allIncidents.map(x => x.devicesCount);
        let incidentsLabels = this.allIncidents.map(x => x.deviceTypeName);

        incidentsData.push(0);
        incidentsLabels.push('');
      
        for(let i=0; i<incidentsData.length; i++) {
          let tmpArray = [];
  
          tmpArray.push(incidentsData[i]);
  
          this.secondPieChartData.push({
            data: tmpArray,
            label: incidentsLabels[i],
          });
        }
        
        this.secondPieChartLabels.push("Number of devices");
      }
    });
  }

  refreshResult: Function = (filterCount: any) => {
    let token = sessionStorage.getItem('id_token');

    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        'Authorization': 'Bearer ' + token
      }),
      params: new HttpParams()
        .set('count', filterCount)
    };

    this.httpClient.get(environment.serviceUrl+'api/Reporting/GetFrequentDevices', options).subscribe(result => {
      this.showReport = result instanceof Array ? result.length != 0 : false;
      let resultLength = result instanceof Array ? result.length : 0;

      if(this.showReport){
        let dataCopy = this.allIncidents;

        for(let i=0; i<dataCopy.length; i++) { 
          dataCopy[i].devicesCount = 0;
        }
        
        for(let i=0; i<resultLength; i++) { 
          var dataCopyItem = dataCopy.find(x => x.deviceTypeName == result[i].deviceTypeName);
          
          dataCopyItem.devicesCount = result[i].devicesCount;
        }

        this.allIncidents = dataCopy;

        this.secondPieChartData = [];
        this.secondPieChartLabels = [];
        
        let incidentsData = dataCopy.map(x => x.devicesCount);
        let incidentsLabels = dataCopy.map(x => x.deviceTypeName);
      
        for(let i=0; i<incidentsData.length; i++) {
          let tmpArray = [];
  
          tmpArray.push(incidentsData[i]);
  
          this.secondPieChartData.push({
            data: tmpArray,
            label: incidentsLabels[i],
          });
        }
        
        this.secondPieChartLabels.push("Number of devices");
      }
    });
  }

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.refreshResultInit(this.filterCount);
  }

  applyFilter(filter) {
    this.refreshResult(this.filterCount);
  }
}
