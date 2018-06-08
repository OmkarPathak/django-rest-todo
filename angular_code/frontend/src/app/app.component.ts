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
  site_title = 'My first Django, Angular REST API';
  register;
  tasks;
  url= 'http://127.0.0.1:8000/api/tasks/';

  constructor(private userService:UserService, private http: HttpClient){
    this.userService.get_all_tasks().subscribe(
      result=>{
        this.tasks = result;
      }
    );
  }

  show_all_notes(){
    this.userService.get_all_tasks().subscribe(
      result=>{
        this.tasks = result;
      }
    );
  }

  retrieve_tasks(){
    return this.http.get('http://127.0.0.1:8000/api/tasks');
  }

  onSubmit(person: Person){
    this.http.post('http://127.0.0.1:8000/api/tasks/add/', person).subscribe(status=> console.log(JSON.stringify(status)));

    this.tasks = this.retrieve_tasks()
  }
}

export interface Person {
  title: string;
  description: string;
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
