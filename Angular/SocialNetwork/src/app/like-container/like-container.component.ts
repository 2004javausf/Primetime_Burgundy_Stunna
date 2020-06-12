import { UserLikesService } from './../services/user-likes.service';
import { Input, Output, EventEmitter } from '@angular/core';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'like-container',
  templateUrl: './like-container.component.html',
  styleUrls: ['./like-container.component.css'],
})
export class LikeContainerComponent implements OnInit {
  @Input('isLiked') isSelected: boolean;
  @Input('likeCount') likeCount: number;
  @Input('user') user;
  @Input('post') post;

  initIsSelected;
  constructor(private uselikesService: UserLikesService) {}

  ngOnInit(): void {
    this.initIsSelected = this.isSelected;
  }

  onClick() {
    console.log(this.user.username);
    this.isSelected = !this.isSelected;
    if (this.isSelected == true) {
      this.likeCount += 1;
      this.uselikesService
        .addLike(this.user.username, this.post.id)
        .subscribe((res) => console.log(res));
    } else {
      this.likeCount -= 1;
      this.uselikesService
        .deletePostLike(this.user.username, this.post.id)
        .subscribe((res) => console.log(res));
    }
  }
}
