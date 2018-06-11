import { Component, OnInit, Input, Output } from '@angular/core';
import { UserService } from './user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', "../../node_modules/bootstrap/dist/css/bootstrap.min.css",],
  providers: [UserService]
})

export class AppComponent{
  site_title = 'My first Django, Angular REST API';
  register;
  tasks;
  id;
  logged_in=false;
  title:string;
  description:string;
  etitle:string;
  edescription:string;
  url= 'http://127.0.0.1:8000/api/tasks/';

  constructor(private userService:UserService, private http: HttpClient){
    this.userService.get_all_tasks().subscribe(
      result=>{
        this.tasks = result;
      }
    );

    // @Input('logged_in') this.logged_in;
  }

  onSubmit(notes: Task){
    this.http.post('http://127.0.0.1:8000/api/tasks/add/', notes).subscribe(status=>this.tasks.push(status)); 
  }

  btnClick(id){
    this.http.delete('http://127.0.0.1:8000/api/tasks/' + id + '/delete/').subscribe(status=>{
      this.userService.get_all_tasks().subscribe(
        result=>{
          this.tasks = result;
        }
      );
    });
  }

  onEdit(notes: Task){
    console.log(notes);
    this.http.put('http://127.0.0.1:8000/api/tasks/' + this.id + '/edit/', notes).subscribe(status=>{
      this.userService.get_all_tasks().subscribe(
        result=>{
          this.tasks = result;
        }
      );
    });
  }

  editTask(id){
    this.http.get('http://127.0.0.1:8000/api/tasks/' + id + '/').subscribe(data=>{this.id=data['id']; this.etitle=data['title'];this.edescription=data['description']});
  }
}

export interface Task {
  title: string;
  description: string;
}
