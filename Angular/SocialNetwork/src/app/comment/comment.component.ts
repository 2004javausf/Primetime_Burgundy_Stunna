import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "comment",
  templateUrl: "./comment.component.html",
  styleUrls: ["./comment.component.css"],
})
export class CommentComponent implements OnInit {
  @Input("in") comment;
  picture;
  constructor() {}

  ngOnInit(): void {
    this.picture = {
      "background-image": "url(" + this.comment.picture + ")",
    };
  }
}
