import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "comment-container",
  templateUrl: "./comment-container.component.html",
  styleUrls: ["./comment-container.component.css"],
})
export class CommentContainerComponent implements OnInit {
  @Input("comments") comments;
  // @Output() toggled = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
