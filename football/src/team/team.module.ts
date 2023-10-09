import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CreateTeamComponent } from './Compontes/CreateTeam/CreateTeam.component';
import { MainTeamComponent } from './Compontes/MainTeam/MainTeam.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,RouterModule,FormsModule,HttpClientModule
  ],
  declarations: [TeamComponent,CreateTeamComponent,MainTeamComponent],
  exports:[CreateTeamComponent,MainTeamComponent]
})
export class TeamModule { }
