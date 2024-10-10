import { Routes } from '@angular/router';
import { CardsListComponent } from './cards-list/cards-list.component';
import { CardDetailsComponent } from './card-details/card-details.component';

export const routes: Routes = [

  { path: '',   redirectTo: '/cards', pathMatch: 'full' },
  { path: 'cards', component: CardsListComponent },
  { path: 'cards/:id', component: CardDetailsComponent },
];
