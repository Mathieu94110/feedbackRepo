import { Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { CardsComponent } from './pages/cards/cards.component';

export const routes: Routes = [
  { path: '', redirectTo: '/cards', pathMatch: 'full' },
  { path: 'cards', component: CardsComponent },
  { path: 'card', component: CardComponent },
];
