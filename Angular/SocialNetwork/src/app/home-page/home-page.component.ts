import { UserService } from './../services/user.service';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/Post';
import { User } from '../interfaces/User';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  view: string;
  posts: any[] = [];
  //current user
  user: User;
  //all users
  users;
  //focused user
  focus;

  changeFocus(user) {
    this.focus = user;
  }
  constructor(
    private postService: PostService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.view = 'Feed';
    this.postService.getTestPosts().forEach((x) => this.posts.push(x));
    this.user = this.userService.getSampleUser();
    this.focus = this.userService.getSampleUser();
    this.users = this.userService.getSampleUsers();
  }
}
