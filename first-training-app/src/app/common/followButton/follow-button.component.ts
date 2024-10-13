import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ns-follow-button',
  templateUrl: './follow-button.component.html',
  styleUrls: ['./follow-button.component.scss'],
})
export class ButtonComponent {
  @Input() index!: number;
  @Input() indexOfFollowedUsers!: number[];
  @Output() switchUserFollowed = new EventEmitter();

  onClick() {
    this.switchUserFollowed.emit();
  }
}
