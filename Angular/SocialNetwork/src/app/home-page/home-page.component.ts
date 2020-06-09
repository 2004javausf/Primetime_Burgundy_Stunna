import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/Post';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  view: string;
  posts: Post[] = [];
  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.view = 'MyProfile';
    this.postService.getTestPosts().forEach((x) => this.posts.push(x));
  }
}
