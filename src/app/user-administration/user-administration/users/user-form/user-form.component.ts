import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { RoleService } from '../../../../../swagger';
import { Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html'
})
export class UserFormComponent implements OnInit {

  model: any = {};
  
  onSubmit() {
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*'
      })
    };
    var json = {firstName:"",lastName:"",email:"",isActive:true,isDeleted:false,languageId:1, id:this.id};
    json.firstName = this.model.firstName;
    json.lastName = this.model.lastName;
    json.email = this.model.email;
    if(!this.edit)
    {
      this.http.post(this.baseUrl + 'api/User/Add', json, options).subscribe(res => {
        if(this.model.roleMember != undefined)
          this.model.roleMember.forEach((element, index) => {
            let rm = {isActive:true,userId:res["data"],roleId:element};  
            this.http.post(this.baseUrl + 'api/RoleMember/Add', rm, options).subscribe(r => {
              
            },
          e => console.log(e),
          () => {
            if(index == this.model.roleMember.length - 1)
            {
              this.router.navigate(['/users/users']);
              alert("User added!");
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
      this.http.put(this.baseUrl + 'api/User/Update', json, options).subscribe(res => {
        const headers = new HttpHeaders().set("Content-Type", "application/json; charset=utf-8");   
        this.http.delete(this.baseUrl + 'api/RoleMember/DeleteByUserId?userId=' + this.id, {headers}).subscribe(res =>{});
        if(this.model.roleMember != undefined)
          this.model.roleMember.forEach((element, index) => {
            let rm = {isActive:true,userId:this.id,roleId:element};  
            this.http.post(this.baseUrl + 'api/RoleMember/Add', rm, options).subscribe(r => {
                
            },
            e => console.log(e),
            () => {
              if(index == this.model.roleMember.length - 1)
              {
                this.router.navigate(['/users/users']);
                alert("User updated!");
              }
            });
          });
      },
      e => console.log(e),
      () => {
        if(this.model.roleMember.length == 0)
        {
          this.router.navigate(['/users/users']);
          alert("User updated!");
        }
      });
    }
  }

  constructor(private http: HttpClient, private rolesApiClient: RoleService, private activatedRoute: ActivatedRoute
            , private router: Router) { }
  private baseUrl = environment.serviceUrl;
  roles:any;
  activeRoles: any;
  inactiveRoles: any;
  edit: boolean = false;
  id = 0;
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if(params['id'] == undefined)
        this.edit = false;
      else
        this.edit = true;
      this.model.firstName = params['firstName'];
      this.model.lastName = params['lastName'];
      this.model.email = params['email'];
      this.id = params['id'];
      this.model.roleMember = [];
      if(params['roleMember'] != undefined && params['roleMember'] != "")
      {
        let rm = params['roleMember'].split(",");
        rm.forEach(element => {
          this.model.roleMember.push(Number(element));
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
    this.roles = this.rolesApiClient.roleGet();
    this.roles.subscribe(val => {
      this.activeRoles = val.filter(res => res.isActive);
      this.inactiveRoles = val.filter(res => !res.isActive);
    });
    // this.http.get(this.baseUrl +'api/Role/GetAll', options).subscribe(result => {
    //   this.roles = result;
    // });
  }

}
