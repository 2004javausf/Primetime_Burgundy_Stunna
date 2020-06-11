import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css'],
})
export class CommentFormComponent implements OnInit {
  @Input('user') user;

  //add a button
  //add an input feild
  //look up ngModel and ngForm if you want.
  constructor() {}

  ngOnInit(): void {}
}
