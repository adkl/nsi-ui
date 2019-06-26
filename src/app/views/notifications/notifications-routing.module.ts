import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotificationsListComponent} from './notifications-list.component';

const routes: Routes = [
  {
    path: '',
    component: NotificationsListComponent,
    data: {
      title: 'Notifications'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationsRoutingModule {
}
