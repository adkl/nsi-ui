import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserForListViewModel, UserService } from '../../../../../swagger';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html'
})
export class UserProfileComponent implements OnInit {

  public users: Observable<UserForListViewModel[]>;
  user: any;
  constructor(private usersApiClient: UserService) { }

  ngOnInit() {
    let token = sessionStorage.getItem('id_token');
    let dec = jwt_decode(token);
    debugger
    this.users = this.usersApiClient.userGet();
    this.users.subscribe(val => {
    this.user = val.filter(res => {
      debugger;
      if(res.email == dec.email)
        return res;});
    });
  }

}
