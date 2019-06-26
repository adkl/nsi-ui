import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RoleService, RoleForListViewModel } from '../../../../swagger';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';

@Component({
  selector: 'roles',
  templateUrl: './roles.component.html'
})
export class RolesComponent implements OnInit {

  @Output() openNewRoleForm = new EventEmitter();

  public roles: Observable<RoleForListViewModel[]>;
  activeRoles: any;
  inactiveRoles: any;
  
  constructor(
    private http: HttpClient, 
    private rolesApiClient: RoleService, 
    private router: Router,
    private msAdal: MsAdalAngular6Service) { }

  searchTerm: string;

  ngOnInit() {
    this.loadRoles();
  }

  public loadRoles(){
    this.roles = this.rolesApiClient.roleGet(this.searchTerm);
    this.roles.toPromise().then(val => {
      this.activeRoles = val.filter(res => res.isActive);
      this.inactiveRoles = val.filter(res => !res.isActive);
    });
  }

  permissions = [];
  createPermissions(role: any){
    role.permissions.forEach(element => {
      this.permissions.push(Number(element.permissionId));
    });
    this.router.navigate(['/users/rolesform',{name: role.name, rolePermissions: this.permissions, id:role.roleInfoId}]);
  }

  onOpenNewRoleForm() {
    this.openNewRoleForm.emit();
  }

  private baseUrl = environment.serviceUrl;

  switch(role: any) {
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*'
      })
    };
    
    var json = {name:role.name, isActive:!role.isActive, manipulationLogId:role.manipulationLogId, id:role.roleInfoId};
    this.http.put(this.baseUrl + 'api/Role/UpdateRole', json, options).subscribe(res => {
      this.loadRoles();
    });
    
  }

}
