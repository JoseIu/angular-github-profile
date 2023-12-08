import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  public userData?: User;
  constructor(private userService: UserProfileService) {}
  ngOnInit(): void {
    this.userService.getDataUser().subscribe((user) => {
      this.userData = user;
      console.log(user);
    });
  }
}
