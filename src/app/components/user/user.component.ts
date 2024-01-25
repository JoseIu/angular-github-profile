import { Component, Input } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { Repos } from 'src/app/interfaces/userRepos.interface';

@Component({
  selector: 'user-component',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  @Input() public userData?: User;
  @Input() public repos: Repos[] = [];
}
