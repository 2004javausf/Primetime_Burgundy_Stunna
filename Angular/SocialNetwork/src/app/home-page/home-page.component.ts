import { Comment } from './../interfaces/Comment';
import { CommentService } from './../comment.service';
import { UserService } from './../services/user.service';
import { PostService } from './../services/post.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../interfaces/Post';
import { User } from '../interfaces/User';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  
})
export class HomePageComponent implements OnInit {
  @Output() logout = new EventEmitter();
  view: string;
  posts: any[] = [];
  //current user
  @Input('user') user: User;

  //all users
  users;
  //all comments
  comments;
  //focused user
  focus;

  changeFocus(user) {
    this.focus = user;
  }
  onLogout() {
    this.logout.emit();
  }
  constructor(
    private postService: PostService,
    private userService: UserService,
    private commentService: CommentService
  ) {}

  ngOnInit(): void {
    this.view = 'Feed';
    this.postService.getPosts().subscribe((posts) => {
      this.commentService.getAllComments().subscribe((comments) => {
        let tmp = comments;
        posts.forEach((post) => {
          post.comments = [];
          tmp.forEach((comment) => {
            if (post.username == comment.username) {
              post.comments.push(comment);
            }
          });
        });
      });
      this.posts = posts;
      console.log(this.posts);
    });
    // this.commentService.getAllComments().subscribe((comments) => {
    //   this.comments = comments;
    //   console.log('in commentService');
    //   console.log(this.comments);
    // });
    this.focus = this.userService.getSampleUser();
    this.users = this.userService.getSampleUsers();
  }
}
