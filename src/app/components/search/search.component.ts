import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';
import { User } from 'src/app/interfaces/user.interface';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'search-input',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  public userService = inject(UserProfileService);

  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSubscription?: Subscription;

  public userData?: User;
  public usertFound: boolean = true;

  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(300)).subscribe((value) =>
      this.userService.getDataUser(value).subscribe((user) => {
        //Cheack if user is not undefined
        if (user !== undefined) {
          this.usertFound = true;
          this.userData = user;
          return;
        }
        this.usertFound = false;
        console.log('SEARCH', user);
      })
    );
  }
  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe;
  }

  public searchUser(event: any): void {
    this.debouncer.next(event.target.value);
  }
  public setUser(): void {
    if (this.userData) {
      this.userService.upDateUserData(this.userData);
    }
  }
}
