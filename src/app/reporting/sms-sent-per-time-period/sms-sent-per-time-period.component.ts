import { Component, OnInit, EventEmitter, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment.dev';
import { FilterPickerComponent } from '../filter-picker/filter-picker.component';

@Component({
  selector: 'app-sms-sent-per-time-period',
  templateUrl: './sms-sent-per-time-period.component.html',
  styleUrls: ['./sms-sent-per-time-period.component.scss']
})
export class SMSSentPerTimePeriodComponent implements OnInit {
  dateFrom = new Date();
  dateTo = new Date();

  smsData: any;
  showReport: boolean = false;
  showError: boolean = false;

  @ViewChild('appfilterpicker') appfilterpicker: FilterPickerComponent;
  showResultsBool = false;

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
          .set('dateFrom', this.dateFrom.toISOString())
          .set('dateTo', this.dateTo.toISOString())
      };

      this.httpClient.get(environment.serviceUrl+'api/Reporting/GetSmsSendingData', options).subscribe(result => {
        this.smsData = result;
        this.showReport = true;
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
