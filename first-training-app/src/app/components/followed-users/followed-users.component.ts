import { Component, Input } from '@angular/core';
import { IUserInfo } from 'src/models';

@Component({
  selector: 'ns-followed-users',
  templateUrl: './followed-users.component.html',
  styleUrls: ['./followed-users.component.scss'],
})
export class FollowedUsersComponent {
  @Input() followedUsers: IUserInfo[] = [];
}
