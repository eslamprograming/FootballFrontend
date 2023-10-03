import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchComponent } from './Match.component';
import { MainMatchComponent } from './Compontes/MainMatch/MainMatch.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MatchComponent,MainMatchComponent],
  exports:[MainMatchComponent]
})
export class MatchModule { }
