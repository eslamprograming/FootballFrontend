import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeagueService } from 'src/League/Services/League.service';
import { Response } from 'src/app/ModelView/Response';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  responseobj:Response=new Response();

  constructor(private service:LeagueService,private router:Router) { }

  ngOnInit() {
    this.getAll();
  }
  getAll(){
    this.service.GetAll(1).subscribe(reponse=>{
      this.responseobj=reponse;

      if(this.responseobj.success===true){
        
      }
      else{
        alert(this.responseobj.message);
      }
      console.log(reponse);

    },
    error=>{
      alert("error this error is "+error.Message);
    }
    )
  }
  getImageUrl(googleDriveLink: any): string {
    const fileId = this.extractFileId(googleDriveLink);
    return `https://drive.google.com/uc?id=${fileId}`;
  }

  private extractFileId(link: string): string {
    const regex = /\/d\/([^/]+)\//;
    const match = link.match(regex);
    return match ? match[1] : '';
  }

}
