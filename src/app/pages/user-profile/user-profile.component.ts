import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { Repos } from 'src/app/interfaces/userRepos.interface';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  public userData?: User;
  public repos: Repos[] = [];

  public isLoading: boolean = true;

  constructor(private userService: UserProfileService) {}

  ngOnInit(): void {
    this.userService.getDataUser().subscribe((user) => {
      this.userData = user;

      if (user) {
        this.getRepos(user.login);
        this.isLoading = false;
      }
    });

    this.userService.userData.subscribe({
      next: (user) => {
        if (user) {
          this.userData = user;
          this.getRepos(user.login);
          this.isLoading = false;
        }
      },
      error: console.error,
    });
  }

  public getRepos(name: string): void {
    this.userService.getRepos(name).subscribe((repos) => {
      this.repos = repos;
    });
  }
}
