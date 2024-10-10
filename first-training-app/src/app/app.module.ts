import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { CardsListComponent } from './cards-list/cards-list.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { FormatDatePipe } from './pipe/date-pipe/date.pipe';
import { ButtonComponent } from './common/button/button.component';

@NgModule({
  declarations: [AppComponent, CardsListComponent, CardDetailsComponent, FormatDatePipe, ButtonComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
