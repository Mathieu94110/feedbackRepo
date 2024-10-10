import { Component } from '@angular/core';
import { Steps } from 'src/models';

@Component({
  selector: 'ns-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss'],
})
export class CardDetailsComponent {
  date = new Date();
  currentStep: keyof typeof Steps = "Start" ;
  btnVal : string = "Follow"
  toggleOpen(value: keyof typeof Steps) {
    this.currentStep = value
  }

/*   switchFollow(value: Steps) {
    this.currentStep = value
  } */
}
