import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { Repos } from '../interfaces/userRepos.interface';

@Injectable({
  providedIn: 'root',
})
export class UserProfileService {
  private baseUrl = `https://api.github.com/users`;

  constructor(private http: HttpClient) {}

  public getDataUser(username: string = 'github'): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${username}`);
  }

  public getRepos(name: string): Observable<Repos[]> {
    return this.http.get<Repos[]>(`${this.baseUrl}/${name}/repos`);
  }
}
