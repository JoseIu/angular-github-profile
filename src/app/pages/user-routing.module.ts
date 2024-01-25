import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLayoutComponentComponent } from '../layout/user-layout-component/user-layout-component.component';
import { AllRepositoriesComponent } from './all-repositories/all-repositories.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {
    path: '',
    component: UserLayoutComponentComponent,
    children: [
      {
        path: 'user-profile',
        component: UserProfileComponent,
      },
      {
        path: 'all-repos/:id',
        component: AllRepositoriesComponent,
      },
      {
        path: '**',
        redirectTo: 'user-profile',
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
