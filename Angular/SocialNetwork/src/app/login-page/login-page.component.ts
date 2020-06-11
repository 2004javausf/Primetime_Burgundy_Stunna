import { UserService } from './../services/user.service';
import { HttpClient } from '@angular/common/http';
import { UserLogin } from './../interfaces/UserLogin';
import { NewUser } from './../interfaces/NewUser';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  constructor(
    private postService: PostService,
    private userService: UserService
  ) {}

  ngOnInit(): void {}

  submitLogin(input: UserLogin) {
    //Submits UserLogin
    this.userService.validateUserLogin(input).subscribe((x) => console.log(x));
  }
  submitRegisteration(input: NewUser) {
    //submit NewUser
    this.userService.addUser(input).subscribe(
      (response) => {
        //returns UserData
        //navigate to HomePage, passing UserData to the HomePage
      },
      (error) => {
        //alert saying error from server
      }
    );
  }
}
