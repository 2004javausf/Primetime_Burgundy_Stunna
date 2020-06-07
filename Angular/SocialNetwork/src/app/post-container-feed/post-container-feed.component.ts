import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'post-container-feed',
  templateUrl: './post-container-feed.component.html',
  styleUrls: ['./post-container-feed.component.css'],
})
export class PostContainerFeedComponent implements OnInit {
  posts = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.posts = this.postService.getPost();
  }
}
