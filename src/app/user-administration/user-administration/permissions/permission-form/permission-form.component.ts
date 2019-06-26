import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RoleService, RoleForListViewModel } from '../../../../../swagger';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'permission-form',
  templateUrl: './permission-form.component.html'
})
export class PermissionFormComponent implements OnInit {

  constructor(private http: HttpClient, private rolesApiClient: RoleService, private router: Router, private activatedRoute: ActivatedRoute) { }
  private baseUrl = environment.serviceUrl;
  public roles: Observable<RoleForListViewModel[]>;
  activeRoles: any;
  inactiveRoles: any;

  model: any = {};

  onSubmit()
  {
      let options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': '*'
        }) 
      };
      var json = {code:"", isActive:true, manipulationLogId:0, moduleId:1, id:this.id};
      json.code=this.model.code;
      if(!this.edit)
      {
        this.http.post(this.baseUrl + 'api/Permission/AddPermission',json, options).subscribe(res=>{
          this.model.permissionRole.forEach((element, index)=>{
            let rm =  {isActive:true, permissionId:res["data"], roleId:element}; 
            
            this.http.post(this.baseUrl + 'api/RolePermission/AddRolePermission', rm, options).subscribe(r => {

            },
            e => console.log(e),
            () => {
              if(index == this.model.permissionRole.length - 1)
              {
                this.router.navigate(['/users/permissions']);
                alert("Permission added!");
              }
                
            });
          });
        },
        e => console.log(e),
        () => {
          if(this.model.roleMember.length == 0)
          {
            this.router.navigate(['/users/users']);
            alert("User added!");
          }
        });
      }
      else
      {
        this.http.put(this.baseUrl + 'api/Permission/UpdatePermission', json, options).subscribe(res => {
          const headers = new HttpHeaders().set("Content-Type", "application/json; charset=utf-8");   
        },
        e => console.log(e),
        () => {
            this.router.navigate(['/users/permissions']);
            alert("Permission updated!");
          });
      }
  }

  id = 0;
  edit: boolean = false;
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if(params['id'] == undefined)
        this.edit = false;
      else
        this.edit = true;
      this.model.code = params['code'];
      this.id = params['id'];
    });
    this.roles = this.rolesApiClient.roleGet();
    this.roles.subscribe(val => {
      this.activeRoles = val.filter(res => res.isActive);
      this.inactiveRoles = val.filter(res => !res.isActive);
    });
  }

}
