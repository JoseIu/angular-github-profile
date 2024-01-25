import { Component, Input } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { Repos } from 'src/app/interfaces/userRepos.interface';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent {
  @Input() public userData?: User;
  @Input() public repos: Repos[] = [];

  public isLoading: boolean = true;

  constructor(private userService: UserProfileService) {}
  ngOnInit(): void {
    this.userService.getDataUser().subscribe((user) => {
      this.userData = user;

      this.getRepos(user.name);
      this.isLoading = false;

      console.log('USERDATA', this.userData);
    });
  }

  public searchUser(term: string): void {
    console.log(term);
    this.userService.getDataUser(term).subscribe((user) => {
      this.userData = user;
      this.getRepos(user.repos_url);
      this.isLoading = false;
      console.log(user);
    });
  }

  public getRepos(name: string): void {
    this.userService.getRepos(name).subscribe((repos) => {
      this.repos = repos;

      console.log('REPOS', this.repos);
    });
  }
}
