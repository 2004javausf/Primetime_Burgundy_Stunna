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
  constructor(private postService: PostService) {}

  ngOnInit(): void {}

  submitLogin(input: UserLogin) {
    //Submits UserLogin
    this.postService.validateUserLogin(input).subscribe();
  }
  submitRegisteration(input: NewUser) {
    //submit NewUser
    this.postService.addUser(input).subscribe(
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
