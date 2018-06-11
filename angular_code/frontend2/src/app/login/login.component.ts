import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { viewParentEl } from '@angular/core/src/view/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css',
  "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"]
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit(credentials: Login){
    this.http.post('http://127.0.0.1:8000/api/auth/login/', credentials).subscribe(status=>{
      localStorage.setItem('token', status['token']);
      alert(status['token']);
      localStorage.setItem('logged_in', 'true');
    }, error=>{alert(error['error']['non_field_errors'])}); 
  }

}

export interface Login {
  username: string;
  password: string;
}
