import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent{
  title = 'My first Django, Angular REST API';
  register;
  tasks;
  url= 'http://127.0.0.1:8080/api/tasks/';
  public apps: Applications[];

  constructor(private userService:UserService, private http: HttpClient){
    
  }

  show_all_notes(){
    this.userService.get_all_tasks().subscribe(
      result=>{
        this.tasks = result;
      }
    );
  }
}

interface Applications {
  id: number;
  type: string;
  port: string;
  baseUrl: string;
  architecture: string;
  protocol: string;
  serveur: string; 
}

// export class AppComponent {
//   title: 'My first Django REST'
//   private url: 'http://127.0.0.1:8000/api/tasks/'
//   public apps: Applications[];
  
//   constructor(http: HttpClient) {
//       http.get(this.url).subscribe(result => {
//           this.apps = result.json() as Applications[];
//       }, error => console.error(error));
//   }}
  
//   interface Applications {
//      id: number;
//      type: string;
//      port: string;
//      baseUrl: string;
//      architecture: string;
//      protocol: string;
//      serveur: string; }
