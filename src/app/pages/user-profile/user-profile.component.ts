import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { User } from 'src/app/interfaces/user.interface';
import { Repos } from 'src/app/interfaces/userRepos.interface';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit, OnDestroy {
  public userData?: User;
  public repos: Repos[] = [];

  public isLoading: boolean = true;
  private destroy$ = new Subject<void>();

  constructor(private userService: UserProfileService) {}

  ngOnInit(): void {
    this.userService
      .getDataUser()
      .pipe(takeUntil(this.destroy$))
      .subscribe((user) => {
        this.userData = user;

        if (user) {
          this.getRepos(user.login);
          this.isLoading = false;
        }
      });

    this.userService.userData.pipe(takeUntil(this.destroy$)).subscribe({
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
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  public getRepos(name: string): void {
    this.userService.getRepos(name).subscribe((repos) => {
      this.repos = repos;
    });
  }
}
