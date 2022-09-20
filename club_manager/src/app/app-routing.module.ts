import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { PlayerDetailComponent } from './components/player-detail/player-detail.component';
import { HomeComponent } from './pages/home/home.component';
import { PlayersComponent } from './pages/players/players.component';
import { WageComponent } from './pages/wage/wage.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'players',
    component: PlayersComponent,
  },
  {
    path: 'wage',
    component: WageComponent,
  },
  {
    path: 'edit-player/:id',
    component: EditPlayerComponent,
  },
  {
    path: 'player-detail/:id',
    component: PlayerDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
