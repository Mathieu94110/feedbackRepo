import { Component } from '@angular/core';
import { Steps } from 'src/models';

@Component({
  selector: 'ns-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  date = new Date();
  currentStep: keyof typeof Steps = 'UnFollow';
  btnText: string = 'Follow';
  toggleOpen(): void {
    this.currentStep = 'Cancel';
  }
  changeBtnVal(value: string): void {
    this.btnText = value;
  }
}
