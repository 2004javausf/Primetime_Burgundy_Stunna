import { Input } from "@angular/core";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "like-container",
  templateUrl: "./like-container.component.html",
  styleUrls: ["./like-container.component.css"],
})
export class LikeContainerComponent implements OnInit {
  @Input("isLiked") isSelected: boolean;
  @Input("likeCount") likeCount: number;

  constructor() {}

  ngOnInit(): void {}
  onClick() {
    this.isSelected = !this.isSelected;
  }
}
