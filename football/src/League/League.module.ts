import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeagueComponent } from './League.component';
import { MainComponent } from './Componets/main/main.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,FormsModule,RouterModule
  ],
  declarations: [LeagueComponent,MainComponent],
  exports:[MainComponent]
})
export class LeagueModule { }
