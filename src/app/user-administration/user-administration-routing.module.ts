import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserAdministrationComponent } from './user-administration/user-administration.component';
import { UsersComponent } from './user-administration/users/users.component';
import { PermissionsComponent } from './user-administration/permissions/permissions.component';
import { RolesComponent } from './user-administration/roles/roles.component';
import { UserProfileComponent } from './user-administration/users/user-profile/user-profile.component';
import { UserFormComponent } from './user-administration/users/user-form/user-form.component';
import { RolesFormComponent } from './user-administration/roles/roles-form/roles-form.component';
import { PermissionFormComponent } from './user-administration/permissions/permission-form/permission-form.component';
import { AuthenticationGuard } from 'microsoft-adal-angular6';

const routes: Routes = [
  {
    path: '',
    component: UserAdministrationComponent,
    data: {
      title: 'User Administration'
    },canActivate: [AuthenticationGuard]
  },
    {path: 'users',
    component: UsersComponent,
    data: {
      title: 'Users'
    },
    canActivate: [AuthenticationGuard]
  },
    {path: 'userform',
    component: UserFormComponent,
    data: {
      title: 'User form'
    },
    canActivate: [AuthenticationGuard]
  },
    {path: 'roles',
    component: RolesComponent,
    data: {
      title: 'Roles'
    },
    canActivate: [AuthenticationGuard]
    },
    {path: 'rolesform',
    component: RolesFormComponent,
    data: {
      title: 'Roles form'
    },canActivate: [AuthenticationGuard]
  },
    {path: 'permissions',
    component: PermissionsComponent,
    data: {
      title: 'Permissions'
    },canActivate: [AuthenticationGuard]},
    {path: 'permissionform',
    component: PermissionFormComponent,
    data: {
      title: 'Permission form'
    },canActivate: [AuthenticationGuard]
  },
    {path: 'user',
    component: UserProfileComponent,
    data: {
      title: 'User'
    }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAdministrationRoutingModule {}
