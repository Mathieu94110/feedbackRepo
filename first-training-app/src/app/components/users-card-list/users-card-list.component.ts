import { Component, EventEmitter, Input, Output } from '@angular/core';
import { catchError, EMPTY } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { IUserHttpResponse, IUserInfo } from 'src/models';

@Component({
  selector: 'ns-users-card-list',
  templateUrl: './users-card-list.component.html',
  styleUrls: ['./users-card-list.component.scss'],
})
export class UsersCardListComponent {
  constructor(private usersApi: UserService) {
    this.usersApi
      .getUsersList()
      .pipe(
        catchError((error) => {
          this.error = true;
          this.errorMsg = error;
          return EMPTY;
        })
      )
      .subscribe((data: IUserHttpResponse) => {
        this.users = data.users;
      });
  }
  @Input() indexOfFollowedUsers!: number[];
  @Output() switchUserFollowed = new EventEmitter<{
    user: IUserInfo;
  }>();

  users: IUserInfo[] = [];
  error: boolean = false;
  errorMsg: string | null = null;
}
