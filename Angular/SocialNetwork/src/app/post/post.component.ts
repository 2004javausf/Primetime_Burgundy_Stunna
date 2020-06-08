import { PostService } from './../services/post.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input('in') post;
  picture;
  showPost: boolean = false;
  showComments: boolean;
  constructor() {}
  ngOnInit(): void {
    this.picture = {
      'background-image': 'url(' + this.post.userPicture + ')',
    };
  }
  postToggled() {
    this.showPost = !this.showPost;
    this.showComments = false;
  }
  commentsToggled() {
    this.showComments = !this.showComments;
  }
}