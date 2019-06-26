import { Component, OnInit } from '@angular/core';
import { UserService, UserForListViewModel } from '../../../../swagger';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {

  public users: Observable<UserForListViewModel[]>;
  activeUsers: any;
  inactiveUsers: any;
  constructor(private http: HttpClient, private usersApiClient: UserService, private router: Router) { }

  searchTerm: string;

  ngOnInit() {
    this.loadUsers();
  }

  public loadUsers() {
    this.users = this.usersApiClient.userGet(this.searchTerm);
    this.users.toPromise().then(val => {
      this.activeUsers = val.filter(res => res.isActive);
      this.inactiveUsers = val.filter(res => !res.isActive);
    });
  }
  roles = [];
  createRoles(user: any){
    user.roles.forEach(element => {
      this.roles.push(Number(element.roleId));
    });
    this.router.navigate(['/users/userform',{firstName: user.firstName, lastName: user.lastName, email: user.email, roleMember: this.roles, id: user.userInfoId}]);
  }

  private baseUrl = environment.serviceUrl;

  switch(user: any) {
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*'
      })
    };
    var json = {firstName:user.firstName,lastName:user.lastName,email:user.email,isActive:!user.isActive,isDeleted:false,languageId:1, id:user.userInfoId};
    this.http.put(this.baseUrl + 'api/User/Update', json, options).subscribe(res => {
      this.loadUsers();
    });
    
  }


}
