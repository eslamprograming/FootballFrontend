import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchComponent } from './Match.component';
import { MainMatchComponent } from './Compontes/MainMatch/MainMatch.component';
import { CreatMatchComponent } from './Compontes/CreatMatch/CreatMatch.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,FormsModule
  ],
  declarations: [MatchComponent,MainMatchComponent,CreatMatchComponent],
  exports:[MainMatchComponent,CreatMatchComponent]
})
export class MatchModule { }
