import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PlayersComponent } from './pages/players/players.component';
import { WageComponent } from './pages/wage/wage.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { PlayerDetailComponent } from './components/player-detail/player-detail.component';
import { InfoBoxComponent } from './components/info-box/info-box.component';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeamBoxComponent } from './components/team-box/team-box.component';
import { PlayersHeaderNavComponent } from './components/players-header-nav/players-header-nav.component';
import { ClubFinanceComponent } from './components/club-finance/club-finance.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayersComponent,
    WageComponent,
    EditPlayerComponent,
    PlayerDetailComponent,
    InfoBoxComponent,
    PlayerListComponent,
    TeamBoxComponent,
    PlayersHeaderNavComponent,
    ClubFinanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
