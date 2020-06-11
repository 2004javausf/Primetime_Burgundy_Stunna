import { Input } from '@angular/core';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'like-container',
  templateUrl: './like-container.component.html',
  styleUrls: ['./like-container.component.css'],
})
export class LikeContainerComponent implements OnInit {
  @Input('isLiked') isSelected: boolean;
  @Input('likeCount') likeCount: number;

  initIsSelected;
  constructor() {}

  ngOnInit(): void {
    this.initIsSelected = this.isSelected;
  }
  ngOnDestroy() {
    if (this.initIsSelected == false) {
      if (this.isSelected == true) {
        //send new like to database
      }
    } else if (this.isSelected == false) {
      //delete like from database
    }
  }
  onClick() {
    this.isSelected = !this.isSelected;
    this.isSelected == true ? (this.likeCount -= 1) : (this.likeCount += 1);
  }
}
