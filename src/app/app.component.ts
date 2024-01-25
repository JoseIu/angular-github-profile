import { Component, OnInit } from '@angular/core';
import { User } from './interfaces/user.interface';
import { Repos } from './interfaces/userRepos.interface';
import { UserProfileService } from './services/user-profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public userData?: User;
  public repos: Repos[] = [];
  public isLoading: boolean = true;

  constructor(private userService: UserProfileService) {}
  ngOnInit(): void {
    this.userService.getDataUser().subscribe((user) => {
      this.userData = user;

      this.getRepos(user.repos_url);
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

  public getRepos(url: string): void {
    this.userService.getRepos(url).subscribe((repos) => {
      this.repos = repos;

      console.log('REPOS', this.repos);
    });
  }
}
