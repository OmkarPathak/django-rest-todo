import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  private url = 'http://127.0.0.1:8000/api/tasks/';
  constructor(private http: HttpClient){};
  registerUser(userData): Observable<any> {
    return this.http.get('http://127.0.0.1/api/tasks/')
  }

  get_all_tasks(): Observable<any> {
    return this.http.get(this.url)
  }
}
