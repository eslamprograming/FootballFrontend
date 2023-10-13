import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeagueService } from 'src/League/Services/League.service';
import { Response } from 'src/app/ModelView/Response';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-updatePlayer',
  templateUrl: './updatePlayer.component.html',
  styleUrls: ['./updatePlayer.component.css']
})
export class UpdatePlayerComponent implements OnInit {

  responseobj:Response=new Response();
  fileToUpload: File | null = null;
  teams: any[] = [];

  selectedLeague: number = 0;
  selectedTeam: number = 0;
  model2:any;

  constructor(private router: Router, private http: HttpClient, private service: LeagueService) { }

  ngOnInit() {
    try {
      const storedData = localStorage.getItem("player");

      if (storedData) {
        this.model2 = JSON.parse(storedData);
        this.selectedTeam=this.model2.currentTeamID;
      } else {
        console.log('Key "player" not found in localStorage');
      }
    } catch (error) {
      console.error('Error retrieving object from localStorage:', error);
    }
    this.fetchLeagueData();
  }

  fetchLeagueData() {
    this.service.GetAll(1,'api/League/GetAllLeague?GroupCount=').subscribe(
      (res: Response) => {
        console.log('League data received:', res);
        this.responseobj = res;
        this.selectedLeague = this.responseobj.Value?.leagueID || 0;
        this.fetchTeams();
      },
      (error) => {
        console.error("Error fetching league data:", error);
      }
    );
  }

  fetchTeams() {
    this.http.get<any>(`${environment.apiUrl}api/Team/GetAllTeamInLeague?league=${this.selectedLeague}`).subscribe(
      (response) => {
        this.teams = response.values;
        console.log("Teams in the selected league:", this.teams);
      },
      (error) => {
        console.error("Error fetching teams:", error);
      }
    );
  }

  onFileSelected(event: any) {
    this.fileToUpload = event.target.files[0];
  }

  Team() {
    this.fetchTeams();
  }

  onSubmit(formData: any) {
    alert("submit");
    this.router.navigate(['/Spaner']);
    const objToSend = new FormData();
    objToSend.append('FirstName', formData.FirstName);
    objToSend.append('LastName', formData.LastName);
    if (this.fileToUpload !== null) {
      objToSend.append('PlayerPhoto', this.fileToUpload, this.fileToUpload.name);
    }
    objToSend.append('DateOfBirth', formData.DateOfBirth);
    objToSend.append('Nationality', formData.Nationality);
    objToSend.append('Position', formData.Position);
    objToSend.append('ShirtNumber', formData.ShirtNumber);
    objToSend.append('CurrentTeamID', formData.CurrentTeamID);

    console.log('Form data to be sent:', objToSend);

    this.http.put<any>(`${environment.apiUrl}api/Player/UpdatePlayerInfo?PlayerId=${this.model2.playerID}`, objToSend)
      .subscribe(res => {
        this.router.navigate(['/Player'])
        console.log(res);
        // Additional logic after successful submission
      },
      error => {
        this.router.navigate(['/CreatePlayer'])        
        alert(`Error ${error.status}: ${error.message}`);
        // Handle error if needed
      }
    );
  }
}
