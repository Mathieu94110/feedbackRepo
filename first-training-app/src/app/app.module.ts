import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { FormatDatePipe } from './pipe/date-pipe/date.pipe';
import { ButtonComponent } from './common/followButton/follow-button.component';
import { CardsComponent } from './pages/cards/cards.component';
import { FollowedUsersComponent } from './components/followed-users/followed-users.component';

@NgModule({
  declarations: [AppComponent, CardComponent, FormatDatePipe, ButtonComponent, CardsComponent, FollowedUsersComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
