import { HttpHeaders } from '@angular/common/http';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  submitLogin(formInput) {
    console.log(formInput);
  }
  submitRegisteration(formInput) {
    let header = new HttpHeaders();
    header.set('Access-Control-Allow-Origin', '*');
    // let url =
    //   'http://ec2-3-133-98-43.us-east-2.compute.amazonaws.com:9000/user/all';
    // this.http.get(url).subscribe((x) => console.log(x));
    let url =
      'http://ec2-3-133-98-43.us-east-2.compute.amazonaws.com:9000/user/adduser';
    this.http.post(url, formInput).subscribe((x) => console.log(x));
  }
}
