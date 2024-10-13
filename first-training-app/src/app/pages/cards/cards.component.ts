import { Component, EventEmitter, Output } from '@angular/core';
import { IUserInfo } from 'src/models';

@Component({
  selector: 'ns-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
  @Output() switchUserFollowed = new EventEmitter<IUserInfo>();

  followedUsers: IUserInfo[] = [];
  indexOfFollowedUsers: number[] = [];

  switchUserFollow(event: { user: IUserInfo; i: number }) {
    const { user, i } = event;
    const isUserFollowed = this.followedUsers.indexOf(user) !== -1;
    if (isUserFollowed) {
      this.followedUsers = this.followedUsers.filter((u) => u.id != user.id);
      const indexOfFollowedUser = this.indexOfFollowedUsers.indexOf(i);
      this.indexOfFollowedUsers.splice(indexOfFollowedUser, 1);
    } else {
      this.followedUsers = [...this.followedUsers, user];
      this.indexOfFollowedUsers = [...this.indexOfFollowedUsers, i];
    }
  }
}
