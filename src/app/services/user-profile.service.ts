import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserProfileService {
  private baseUrl = `https://api.github.com/users/github`;

  constructor(private http: HttpClient) {}

  getDataUser(): Observable<User> {
    return this.http.get<User>(this.baseUrl);
  }
}
