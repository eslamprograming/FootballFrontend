import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeagueComponent } from './League.component';
import { MainComponent } from './Componets/main/main.component';
import { FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CreateLeagueComponent } from './Componets/CreateLeague/CreateLeague.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  imports: [
    BrowserModule,CommonModule,FormsModule,RouterModule,HttpClientModule
  ],
  declarations: [LeagueComponent,MainComponent,CreateLeagueComponent],
  exports:[MainComponent,CreateLeagueComponent]
})
export class LeagueModule { }
