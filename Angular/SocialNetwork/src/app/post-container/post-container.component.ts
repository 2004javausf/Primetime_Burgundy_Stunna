import { PostService } from './../services/post.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'post-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.css'],
})
export class PostContainerComponent implements OnInit {
  @Input('postFeed') posts;

  constructor() {}

  ngOnInit(): void {}
}
