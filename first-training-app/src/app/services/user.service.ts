import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, switchMap, throwError } from 'rxjs';
import { IUserHttpResponse, IUserInfo } from 'src/models';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  USERS_URL = 'https://dummyjson.com/users';
  LIMIT = 5;
  errorMsg: string | undefined;
  constructor(private http: HttpClient) {}
  getUsersList(): Observable<IUserHttpResponse> {
    return this.http
      .get<IUserHttpResponse>(`${this.USERS_URL}?limit=${this.LIMIT}`)
      .pipe(
        catchError((error) => {
          if (error.error instanceof ErrorEvent) {
            this.errorMsg = `Error: ${error.error.message}`;
          }
          return throwError(this.errorMsg);
        })
      )
  }
}
