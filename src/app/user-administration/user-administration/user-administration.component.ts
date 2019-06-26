import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersComponent } from './users/users.component';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-user-administration',
  templateUrl: './user-administration.component.html'
})
export class UserAdministrationComponent implements OnInit {

  @ViewChild('permissionsTabs') permissionsTabs: TabsetComponent;
  @ViewChild('rolesTabs') rolesTabs: TabsetComponent;
  
  constructor() { }

  ngOnInit() {
  }

  selectTab(tabId: number) {
    this.permissionsTabs.tabs[tabId].active = true;
    this.rolesTabs.tabs[tabId].active = true;
  }
  

  onOpenNewRoleForm(){
    this.selectTab(2);
  }

  onOpenNewPermissionForm() {
    this.selectTab(1);
  }
}
