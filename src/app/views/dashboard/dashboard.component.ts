import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  ngOnInit(): void {
    var url = window.location.href;
    var idTokenPosition = url.indexOf('id_token=');
    var statePosition = url.indexOf('&state=');
    if (idTokenPosition !== -1) {                   // There is id_token in URL
      idTokenPosition += 9;                         // Go to the first character of token
      sessionStorage.setItem('id_token', url.substring(idTokenPosition, statePosition));
    }
  }
}
