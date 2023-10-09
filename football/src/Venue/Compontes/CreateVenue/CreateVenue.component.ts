import { Component, OnInit } from '@angular/core';
import { VenueVM } from 'src/app/ModelView/VenueVM';

@Component({
  selector: 'app-CreateVenue',
  templateUrl: './CreateVenue.component.html',
  styleUrls: ['./CreateVenue.component.css']
})
export class CreateVenueComponent implements OnInit {

  model:VenueVM=new VenueVM();
  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    
  }

}
