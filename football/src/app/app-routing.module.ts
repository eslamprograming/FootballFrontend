import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/Sheard/Compontes/Home/Home.component';
import { LayoutComponent } from './Layout/Layout.component';
import { RegisterComponent } from 'src/Auth/Compontes/Register/Register.component';
import { LoginComponent } from 'src/Auth/Compontes/Login/Login.component';
import { ProfileComponent } from 'src/Auth/Compontes/Profile/Profile.component';
import { MainComponent } from 'src/League/Componets/main/main.component';
import { MainMatchComponent } from 'src/Match/Compontes/MainMatch/MainMatch.component';
import { MainTeamComponent } from 'src/team/Compontes/MainTeam/MainTeam.component';
import { MainPlayerComponent } from 'src/Player/Conpontes/MainPlayer/MainPlayer.component';
import { MainStandingsComponent } from 'src/strandings/Componets/MainStandings/MainStandings.component';
import { MainVenueComponent } from 'src/Venue/Compontes/MainVenue/MainVenue.component';

const routes: Routes = [
  {path:'',component: LayoutComponent,children:[
    {path:'',component:HomeComponent},
    {path:'League',component:MainComponent},
    {path:'Match',component:MainMatchComponent},
    {path:'Team',component:MainTeamComponent},
    {path:'Player',component:MainPlayerComponent},
    {path:'Standings',component:MainStandingsComponent},
    {path:'Venue',component:MainVenueComponent},

  ],},
  {path:'Register',component:RegisterComponent},
  {path:'Login',component:LoginComponent},
  {path:'Profile',component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }