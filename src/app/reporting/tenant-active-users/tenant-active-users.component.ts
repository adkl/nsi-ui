import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment.dev';

@Component({
  selector: 'app-tenant-active-users',
  templateUrl: './tenant-active-users.component.html',
  styleUrls: ['./tenant-active-users.component.scss']
})
export class TenantActiveUsersComponent implements OnInit {

  showReport: boolean = false;
  public pieChartLabels: string[] = [];
  public pieChartData: number[] = [];
  public pieChartType = 'pie';

  tenantData: any;

  tenant = 1;

  tenants = [
    {
      id: 1,
      description: 'prvi'
    },
    {
      id: 2,
      description: 'drugi'
    },
    {
      id: 3,
      description: 'treci'
    },
    {
      id: 4,
      description: 'cetvrti'
    }
  ];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {

  }

  refreshResult: Function = (filter: any) => {
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
        .set('tenantId', this.tenant.toString())
    };

    this.httpClient.get(environment.serviceUrl+'api/Reporting/GetActiveUsers', options).subscribe(result => {
      var resultData = result;

      this.tenantData = result;

      this.showReport = true;

      var activeCounter = 0;
      var inactiveCounter = 0;

      this.tenantData.users.forEach(element => {
        element.status ? activeCounter++ : inactiveCounter++;
      });

      this.pieChartData.push(activeCounter);
      this.pieChartData.push(inactiveCounter);

      this.pieChartLabels.push('Active');
      this.pieChartLabels.push('Inactive');


    });
  }
}
