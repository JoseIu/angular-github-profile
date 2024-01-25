import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Repos } from 'src/app/interfaces/userRepos.interface';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'app-all-repositories',
  templateUrl: './all-repositories.component.html',
  styleUrls: ['./all-repositories.component.scss'],
})
export class AllRepositoriesComponent implements OnInit {
  private activateRoute = inject(ActivatedRoute);
  private userService = inject(UserProfileService);

  public repos?: Repos[];
  public userName?: string;

  ngOnInit(): void {
    this.activateRoute.params
      .pipe(
        switchMap(({ id }) => {
          this.userName = id;
          return this.userService.getRepos(id);
        })
      )
      .subscribe((repos) => {
        this.repos = repos;
      });
  }
}
