import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {

constructor(private http:HttpClient) { }
postData(leagueVM: any): Observable<any> {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  alert("URL");

  return this.http.post<any>(`${environment.apiUrl}api/League/AddNewLeague`,leagueVM,httpOptions);
}
DeletData(Id:Number,endPoint:any):Observable<any>{
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  return this.http.delete<any>(`${environment.apiUrl}${endPoint}${Id}`);
}
GetAll(group:Number):Observable<any>{
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  return this.http.get<any>(`${environment.apiUrl}api/League/GetAllLeague?GroupCount=${group}`,httpOptions);
}
GetLeague(Id:Number,endPoint:any):Observable<any>{
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  alert(`${environment.apiUrl}${endPoint}${Id}`)
  return this.http.get<any>(`${environment.apiUrl}${endPoint}${Id}`,httpOptions);
}
putData(userData: any,Id:Number): Observable<any> {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  return this.http.put<any>(`${environment.apiUrl}api/League/UpdateLeague${Id}`, userData, httpOptions);
}

}
