import { Component, OnInit, ViewChild } from '@angular/core';
import { FilterPickerComponent } from '../filter-picker/filter-picker.component';

@Component({
  selector: 'app-rules-on-specific-time-period',
  templateUrl: './rules-on-specific-time-period.component.html',
  styleUrls: ['./rules-on-specific-time-period.component.scss']
})
export class RulesOnSpecificTimePeriodComponent implements OnInit {

  @ViewChild('appfilterpicker') appfilterpicker: FilterPickerComponent;
  showResultsBool = false;

  // temp
  // barChart
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['5.10.2018', '6.10.2018', '7.10.2018', '8.10.2018', '9.10.2018', '10.10.2018', '11.10.2018'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData: any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Rule 1'},
    {data: [28, 48, 40, 19, 86, 27, 50], label: 'Rule 2'},
    {data: [18, 58, 50, 29, 86, 37, 90], label: 'Rule 3'}
  ];
  ////////////////

  constructor() { }

  ngOnInit() {
  }

  showResults() {
    this.showResultsBool = true;
  }

}
