import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { MainComponent } from './components/main/main.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { BoardComponent } from './components/board/board.component';
import { CreatePlayerComponent } from './components/board/create-player/create-player.component';
import { FormsModule } from '@angular/forms';
import { ScoresComponent } from './components/board/scores/scores.component';
import { RandomCardComponent } from './components/board/random-card/random-card.component';
import { EditTeamComponent } from './components/board/edit-team/edit-team.component';
import { FastComponent } from './components/fast/fast.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    MainComponent,
    BoardComponent,
    CreatePlayerComponent,
    ScoresComponent,
    RandomCardComponent,
    EditTeamComponent,
    FastComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
