import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { Repos } from '../interfaces/userRepos.interface';

@Injectable({
  providedIn: 'root',
})
export class UserProfileService {
  private baseUrl = `https://api.github.com/users/github`;

  constructor(private http: HttpClient) {}

  getDataUser(): Observable<User> {
    return this.http.get<User>(this.baseUrl);
  }

  getRepos(url: string): Observable<Repos[]> {
    const reposUrl = url;
    return this.http.get<Repos[]>(reposUrl);
  }
}
