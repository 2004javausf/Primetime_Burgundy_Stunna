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
  submitRegisteration(formInput) {}
}