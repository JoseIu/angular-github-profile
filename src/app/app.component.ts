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

  constructor(private userService: UserProfileService) {}
  ngOnInit(): void {
    this.userService.getDataUser().subscribe((user) => {
      this.userData = user;
      this.userService.getRepos(user.repos_url).subscribe((repos) => {
        this.repos = repos;
        console.log('REPOS', this.repos);
      });

      console.log('USERDATA', this.userData);
    });
  }
}
