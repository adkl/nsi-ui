import { Component, OnInit, EventEmitter, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment.dev';

@Component({
  selector: 'app-user-logins-time-of-day',
  templateUrl: './user-logins-time-of-day.component.html',
  styleUrls: ['./user-logins-time-of-day.component.scss']
})
export class UserLoginsTimeOfDayComponent implements OnInit {
  dateFrom = new Date();
  dateTo = new Date();
  chartType = "doughnut";
  chartData: number[] = [];
  chartLabels: string[] = [];

  allLoggings: any;

  showResultsBool = false;
  showError: boolean = false;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.dateFrom.setDate(this.dateFrom.getDate()-10);
  }

  showResults() {
    this.showResultsBool = true;
  }

  refreshResults: Function = () => {
    if(this.dateFrom > this.dateTo) {
      this.showError = true;
      this.showResultsBool = false;
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
          .set('dateFrom', this.dateFrom.toISOString())
          .set('dateTo', this.dateTo.toISOString())
      };

      this.httpClient.get(environment.serviceUrl+'api/Reporting/GetUserLoggingData', options).subscribe(result => {
        this.showResultsBool = result instanceof Array ? result.length != 0 : false;

        if(this.showResultsBool) {
          this.allLoggings = result;

          this.chartData = this.allLoggings.map(x => x.logsCount);
          this.chartLabels = this.allLoggings.map(x => x.machineName);
        }
      });
    }
  }

  dateFromChanged: Function = (newDate) => {
    this.dateFrom = new Date(newDate.target.value);
  }

  dateToChanged: Function = (newDate) => {
    this.dateTo = new Date(newDate.target.value);
  }
}
