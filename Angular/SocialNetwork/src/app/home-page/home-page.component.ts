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
  // public show: boolean = false;
  // public buttonName: any = 'Show';
  // public show2: boolean = false;
  // public buttonName2: any = 'Show2';
  // public show3: boolean = false;
  // public buttonName3: any = 'Show3';
  // toggle() {
  //   this.show = !this.show;

  //   // CHANGE THE NAME OF THE BUTTON.
  //   if (this.show) this.buttonName = 'My profile button';
  //   else this.buttonName = 'My profile button';
  // }
  // toggle2() {
  //   this.show2 = !this.show2;

  //   // CHANGE THE NAME OF THE BUTTON.
  //   if (this.show2) this.buttonName2 = 'Modify Info Button';
  //   else this.buttonName2 = 'Modify Info Button';
  // }

  // toggle3() {
  //   this.show3 = !this.show3;

  //   // CHANGE THE NAME OF THE BUTTON.
  //   if (this.show3) this.buttonName3 = 'Search network Button';
  //   else this.buttonName3 = 'Search network Button';
  // }
}
