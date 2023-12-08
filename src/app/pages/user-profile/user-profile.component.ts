import { Component, Input } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { Repos } from 'src/app/interfaces/userRepos.interface';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent {
  @Input() public userData?: User;
  @Input() public repos: Repos[] = [];
}
