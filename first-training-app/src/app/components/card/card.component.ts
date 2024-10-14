import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUserInfo, Steps } from 'src/models';

@Component({
  selector: 'ns-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() index!: number;
  @Input() user!: IUserInfo;
  @Input() indexOfFollowedUsers!: number[];
  @Output() switchUserFollowed = new EventEmitter<{
    user: IUserInfo;
  }>();

  date = new Date();
  currentStep: keyof typeof Steps = 'UnFollow';
  btnText: string = 'Follow';

  toggleOpen(): void {
    this.currentStep = 'Cancel';
  }
  changeBtnVal(value: string): void {
    this.btnText = value;
  }
  getFullName(firstname: string, lastname: string) {
    return `${firstname} ${lastname}`;
  }
  switchUserFollow() {
    this.switchUserFollowed.emit();
  }
}
