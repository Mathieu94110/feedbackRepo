import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUserInfo } from 'src/models';

@Component({
  selector: 'ns-follow-button',
  templateUrl: './follow-button.component.html',
  styleUrls: ['./follow-button.component.scss'],
})
export class FollowedButtonComponent {
  @Input() index!: number;
  @Input() indexOfFollowedUsers!: number[];
  @Output() switchUserFollowed = new EventEmitter();

  onClick() {
    this.switchUserFollowed.emit();
  }
  ifFollower(userId: number) {
    return this.indexOfFollowedUsers.includes(userId) ? 'UnFollow' : 'Follow';
  }
}
