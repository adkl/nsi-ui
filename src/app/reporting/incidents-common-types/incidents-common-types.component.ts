import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-incidents-common-types',
  templateUrl: './incidents-common-types.component.html',
  styleUrls: ['./incidents-common-types.component.scss']
})
export class IncidentsCommonTypesComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*'
      })
    };
    this.http.get('https://localhost:44349/api/Incident/Get', options).subscribe(result => {
      debugger
    });
  }

}
