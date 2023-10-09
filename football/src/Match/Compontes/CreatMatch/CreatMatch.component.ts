import { Component, OnInit } from '@angular/core';
import { CreateMatch } from 'src/app/ModelView/CreateMatch';

@Component({
  selector: 'app-CreatMatch',
  templateUrl: './CreatMatch.component.html',
  styleUrls: ['./CreatMatch.component.css']
})
export class CreatMatchComponent implements OnInit {

  model: CreateMatch={} as CreateMatch;
  constructor() { }

  ngOnInit() {
  }
  onSubmit(){

  }

}
