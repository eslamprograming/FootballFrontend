// MainTeam.component.ts

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LeagueService } from 'src/League/Services/League.service';
import { Response } from 'src/app/ModelView/Response';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-MainTeam',
  templateUrl: './MainTeam.component.html',
  styleUrls: ['./MainTeam.component.css']
})
export class MainTeamComponent implements OnInit {
  responseobj: Response = new Response();
  teams: any[] = []; // Assuming you have a Team model, replace 'any[]' with the actual type of your teams.
  selectedLeague: number = 0;
  

  constructor(private http: HttpClient, private service: LeagueService) { }

  ngOnInit() {
    this.service.GetAll(1).subscribe(
      (res) => {
        this.responseobj = res;
      },
      (error) => {
        console.error("Error fetching data:", error);
        // You may want to provide a user-friendly error message in the UI.
      }
    );
  }
  leagueTeam() {
    // Now you can use this.selectedLeague as a number.
    this.http.get<any>(`${environment.apiUrl}api/Team/GetAllTeamInLeague?league=${this.selectedLeague}`).subscribe(
      (response) => {
        this.teams = response.values; // Assuming the response is an array of teams.
        console.log("Teams in the selected league:", this.teams);
        
      },
      (error) => {
        console.error("Error fetching teams:", error);
        // You may want to provide a user-friendly error message in the UI.
      }
    );
  }
  

  viewDetails(team: any) {
    // Implement the logic to view details of the selected team.
    console.log("View details of the team:", team);
  }

  editTeam(team: any) {
    // Implement the logic to edit the selected team.
    console.log("Edit team:", team);
  }

  deleteTeam(team: any) {
    // Implement the logic to delete the selected team.
    console.log("Delete team:", team);
  }
}
