import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ns-follow-button',
  templateUrl: './follow-button.component.html',
  styleUrls: ['./follow-button.component.scss'],
})
export class ButtonComponent {
  @Input() value!: string;
  @Output() changeBtnVal = new EventEmitter<string>();

  switchValue() {
    this.changeBtnVal.emit(this.value === 'Follow' ? 'Unfollow' : 'Follow');
  }
}
