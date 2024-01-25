import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoaderComponent } from '../components/loader/loader.component';
import { RepoCardComponent } from '../components/repo-card/repo-card.component';
import { SearchComponent } from '../components/search/search.component';
import { UserComponent } from '../components/user/user.component';
import { UserLayoutComponentComponent } from '../layout/user-layout-component/user-layout-component.component';
import { daysPassedPipe } from '../pipes/daysPassed.pipe';
import { AllRepositoriesComponent } from './all-repositories/all-repositories.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [
    UserLayoutComponentComponent,
    UserComponent,
    daysPassedPipe,
    SearchComponent,
    RepoCardComponent,
    LoaderComponent,
    UserProfileComponent,
    AllRepositoriesComponent,
  ],
  imports: [CommonModule, UserRoutingModule],
})
export class UserModuleModule {}
