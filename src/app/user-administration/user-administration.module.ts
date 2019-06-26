import { RolesComponent } from './user-administration/roles/roles.component';
import { RolesFormComponent } from './user-administration/roles/roles-form/roles-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAdministrationComponent } from './user-administration/user-administration.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { UsersComponent } from './user-administration/users/users.component';
import { UserFormComponent } from './user-administration/users/user-form/user-form.component';
import { PermissionsComponent } from './user-administration/permissions/permissions.component';
import { PermissionFormComponent } from './user-administration/permissions/permission-form/permission-form.component';
import { UserProfileComponent } from './user-administration/users/user-profile/user-profile.component';
import { ApiModule } from '../../swagger';
import { UserAdministrationRoutingModule } from './user-administration-routing.module';
import { FormsModule }   from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    TabsModule.forRoot(),
    UserAdministrationRoutingModule,
    FormsModule
  ],
  declarations: [
    UserAdministrationComponent, 
    UsersComponent, 
    UserFormComponent, 
    PermissionsComponent, 
    PermissionFormComponent, 
    UserProfileComponent, 
    RolesComponent, 
    RolesFormComponent
  ]
})
export class UserAdministrationModule { }
