import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment.dev';
import { FilterPickerComponent } from '../filter-picker/filter-picker.component';
import { log } from 'util';

@Component({
  selector: 'app-incidents-specific-time-period',
  templateUrl: './incidents-specific-time-period.component.html',
  styleUrls: ['./incidents-specific-time-period.component.scss']
})
export class IncidentsSpecificTimePeriodComponent implements OnInit {

  @ViewChild('appfilterpicker') appfilterpicker: FilterPickerComponent;

  showReport: boolean = false;
  allIncidents: any = [];
  filteredIncidents: any = [];
  appliedFilter: any = { };
  showError: boolean = false;
  public firstPieChartLabels: string[] = [];
  public firstPieChartData: number[] = [];
  public firstPieChartType = 'pie';

  public secondPieChartLabels: string[] = [];
  public secondPieChartLabel: string = "";
  public secondPieChartData: any[] = [];
  public secondPieChartType = 'bar';

  public chartColors: any[] = [
    { backgroundColor: '#86c7f3', borderColor: '#86c7f3' },
    { backgroundColor: '#ffa1b5', borderColor: '#ffa1b5' },
    { backgroundColor: 'transparent', borderColor: 'transparent' }
  ];
  public pieColors: any[] = [{ backgroundColor: ["#86c7f3", "#ffa1b5", "transparent"] }];

  refreshResult: Function = (filter: any) => {
    if(this.appliedFilter.dateFrom > this.appliedFilter.dateTo) {
      this.showError = true;
      this.showReport = false;
    }
    else {
      this.showError = false;
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
                  .set('dateFrom', filter.dateFrom.toISOString())
                  .set('dateTo', filter.dateTo.toISOString())
                  .set('tenantId', filter.tenant)
      };

      this.httpClient.get(environment.serviceUrl+'api/Reporting/GetFrequentIncidents', options).subscribe(result => {
        this.allIncidents = result;
        this.filteredIncidents = result;

        this.secondPieChartData = [];
        this.secondPieChartLabels = [];
        
        let incidentsData = this.filteredIncidents.map(x => x.numberOfIncidents);
        let incidentsLabels = this.filteredIncidents.map(x => x.incidentTypeName);

        incidentsData.push(0);
        incidentsLabels.push('');

        this.firstPieChartData = incidentsData;
        this.firstPieChartLabels = incidentsLabels;

        for(let i=0; i<incidentsData.length; i++) {
          let tmpArray = [];

          tmpArray.push(incidentsData[i]);

          this.secondPieChartData.push({
            data: tmpArray,
            label: incidentsLabels[i],

          });
        }
        
        this.secondPieChartLabels.push("Types of incidents");

        this.showReport = result instanceof Array ? result.length != 0 : false;
      });
    }
  }

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    let dateTo: Date = new Date();
    let dateFrom: Date = new Date();
    this.appliedFilter = { 
      tenant: 0, 
      dateFrom: dateFrom, 
      dateTo: dateTo 
    };

    this.refreshResult(this.appliedFilter);
  }

  applyFilter(filter) {
    this.appliedFilter = {
      tenant: filter.tenant,
      dateFrom: new Date(filter.dateFrom.toString()),
      dateTo: new Date(filter.dateTo.toString())
    };

    this.refreshResult(this.appliedFilter);
  }
}
