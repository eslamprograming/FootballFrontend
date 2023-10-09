import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VenueComponent } from './Venue.component';
import { MainVenueComponent } from './Compontes/MainVenue/MainVenue.component';
import { CreateVenueComponent } from './Compontes/CreateVenue/CreateVenue.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,FormsModule
  ],
  declarations: [VenueComponent,MainVenueComponent,CreateVenueComponent],
  exports:[MainVenueComponent,CreateVenueComponent]
})
export class VenueModule { }
