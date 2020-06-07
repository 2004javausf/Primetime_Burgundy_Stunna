import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'post-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.css'],
})
export class PostContainerComponent implements OnInit {
  posts = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    // this.posts = this.postService.getPost();
  }
}
