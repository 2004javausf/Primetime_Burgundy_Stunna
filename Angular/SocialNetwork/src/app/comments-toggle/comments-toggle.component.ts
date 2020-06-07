import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "comments-toggle",
  templateUrl: "./comments-toggle.component.html",
  styleUrls: ["./comments-toggle.component.css"],
})
export class CommentsToggleComponent implements OnInit {
  @Input("comments") comments;
  @Output() toggled = new EventEmitter();
  isSelected;
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.isSelected = !this.isSelected;
    this.toggled.emit();
  }
}
