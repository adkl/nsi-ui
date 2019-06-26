import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import{PermissionService, PermissionForListViewModel} from '../../../../swagger';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Component({
  selector: 'permissions',
  templateUrl: './permissions.component.html'
})
export class PermissionsComponent implements OnInit {

  @Output() openNewPermissionForm = new EventEmitter();

  public permissions: Observable<PermissionForListViewModel[]>;
  activePermissions: any;
  inactivePermissions: any;
  constructor(private http: HttpClient, private permissionsApiClient: PermissionService, private router: Router) { }
  searchTerm: string;

  ngOnInit() {
    this.loadPermissions();
    
  }
  public loadPermissions(){
    this.permissions = this.permissionsApiClient.permissionGet(this.searchTerm);
    this.permissions.toPromise().then(val => {
      this.activePermissions = val.filter(res => res.isActive);
      this.inactivePermissions = val.filter(res => !res.isActive);
    });

  }
  onOpenNewPermissionForm() {
    this.openNewPermissionForm.emit();
  }

  private baseUrl = environment.serviceUrl;

  switch(permission: any) {
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*'
      })
    };
    var json = {code:permission.code, isActive:!permission.isActive, moduleId:permission.moduleId, id:permission.id, tenantId:permission.tenantId};
    
    this.http.put(this.baseUrl + 'api/Permission/UpdatePermission', json, options).subscribe(res => {
      this.ngOnInit();
    });
    
  }

  roles = [];
  createRoles(permission: any){
    // permission.roles.forEach(element => {
      // this.roles.push(Number(element.roleId));
    // });
    this.router.navigate(['/users/permissionform',{code: permission.code, id: permission.id}]);
  }

}