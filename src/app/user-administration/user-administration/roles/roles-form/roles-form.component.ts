import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PermissionForListViewModel, PermissionService } from '../../../../../swagger';
import { environment } from '../../../../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'roles-form',
  templateUrl: './roles-form.component.html'
})
export class RolesFormComponent implements OnInit {

  constructor(private http: HttpClient, private permissionsApiClient: PermissionService, private activatedRoute: ActivatedRoute
    , private router: Router) { }
  private baseUrl = environment.serviceUrl;
  public permissions: Observable<PermissionForListViewModel[]>;
  activePermissions: any;
  inactivePermissions: any;
  edit: boolean = false;
  id = 0;

  //start
  model: any = {};

  onSubmit(){
    //console.log(this.model.Name);
    //console.log(this.model.Permissions);

    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*'
      })
    };
    var json = {name:"", isActive:true, manipulationLogId:0, id:this.id};
    json.name = this.model.name;
    if (!this.edit)
    {
      this.http.post(this.baseUrl + 'api/Role/AddRole', json, options).subscribe(res => {
        this.model.rolePermission.forEach((element, index) => {
          let rm = {isActive:true, roleId:res["data"], permissionId:element}; 
          
          this.http.post(this.baseUrl + 'api/RolePermission/AddRolePermission', rm, options).subscribe(r => {
  
          },
          e => console.log(e),
          () => {
            if(index == this.model.rolePermission.length - 1)
            {
              this.router.navigate(['/users/roles']);
              alert("Role added!");
            }
          });
        });
      });
    }
    else 
    {
      this.http.put(this.baseUrl + 'api/Role/UpdateRole', json, options).subscribe(res => {
        const headers = new HttpHeaders().set("Content-Type", "application/json; charset=utf-8");   
        this.http.delete(this.baseUrl + 'api/RolePermission/DeleteByRoleId?roleId=' + this.id, {headers}).subscribe(res =>{});
        
        if(this.model.rolePermission != undefined)
          this.model.rolePermission.forEach((element, index) => {
            let rm = {isActive:true,roleId:this.id,permissionId:element};  
            this.http.post(this.baseUrl + 'api/RolePermission/AddRolePermission', rm, options).subscribe(r => {
                
            },
            e => console.log(e),
            () => {
              if(index == this.model.rolePermission.length - 1)
              {
                this.router.navigate(['/users/roles']);
                alert("Role updated!");
              }
            });
          });
      },
      e => console.log(e),
      () => {
        if(this.model.rolePermission.length == 0)
        {
          this.router.navigate(['/users/roles']);
          alert("Role updated!");
        }
      });
    }
    
    

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if(params['id'] == undefined)
        this.edit = false;
      else
        this.edit = true;
      this.model.name = params['name'];
      this.id = params['id'];
      this.model.rolePermission = [];
      debugger
      if(params['rolePermissions'] != undefined && params['rolePermissions'] != "")
      {
        debugger
        let rm = params['rolePermissions'].split(",");
        rm.forEach(element => {
          this.model.rolePermission.push(Number(element));
        });
      }
    });
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*'
      })
    };
    this.permissions = this.permissionsApiClient.permissionGet();
    this.permissions.subscribe(val => {
      this.activePermissions = val.filter(res => res.isActive);
      this.inactivePermissions = val.filter(res => !res.isActive);
    });
  }

}
