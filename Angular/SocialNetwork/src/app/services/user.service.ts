import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = 'http://ec2-3-133-98-43.us-east-2.compute.amazonaws.com:9000/user';
  constructor(private http: HttpClient) {}
  userLogin(input): Observable<User> {
    return this.http.post<User>(this.url + '/login', input);
  }

  getTestUsers() {
    return [
      { id: 1, name: 'Maurie' },
      { id: 2, name: 'Andres' },
      { id: 3, name: 'Nathan' },
      { id: 4, name: 'Brad' },
    ];
  }
}
