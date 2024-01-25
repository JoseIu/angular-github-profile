import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, of } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { Repos } from '../interfaces/userRepos.interface';

@Injectable({
  providedIn: 'root',
})
export class UserProfileService {
  private baseUrl = `https://api.github.com/users`;

  public userData = new BehaviorSubject<User | undefined>(undefined);

  constructor(private http: HttpClient) {}

  public getDataUser(
    username: string = 'github'
  ): Observable<User | undefined> {
    return this.http.get<User>(`${this.baseUrl}/${username}`).pipe(
      catchError((error) => {
        console.error(error);
        return of(undefined);
      })
    );
  }

  public getRepos(name: string): Observable<Repos[]> {
    return this.http.get<Repos[]>(`${this.baseUrl}/${name}/repos`);
  }
  public upDateUserData(user: User): void {
    this.userData.next(user);
  }
}
