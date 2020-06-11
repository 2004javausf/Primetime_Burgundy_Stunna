import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
  @Input('user') user;
  constructor() {}

  ngOnInit(): void {}
}
