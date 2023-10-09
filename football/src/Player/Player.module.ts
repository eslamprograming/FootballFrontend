import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './Player.component';
import { MainComponent } from 'src/League/Componets/main/main.component';
import { CreatePlayerComponent } from './Conpontes/CreatePlayer/CreatePlayer.component';
import { MainPlayerComponent } from './Conpontes/MainPlayer/MainPlayer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,FormsModule
  ],
  declarations: [PlayerComponent,MainPlayerComponent,CreatePlayerComponent],
  exports:[MainPlayerComponent,CreatePlayerComponent]
})
export class PlayerModule { }
