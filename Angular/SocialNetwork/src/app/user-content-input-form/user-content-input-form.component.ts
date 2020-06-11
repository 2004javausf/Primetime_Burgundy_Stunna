import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'user-content-input-form',
  templateUrl: './user-content-input-form.component.html',
  styleUrls: ['./user-content-input-form.component.css'],
})
export class UserContentInputFormComponent implements OnInit {
  @Input('type') type;
  @Input('user') user;
  placeholderText;

  picture;
  constructor() {}

  ngOnInit(): void {
    this.placeholderText = `Please enter your ${this.type}`;
    this.picture = {
      'background-image': 'url(' + this.user.picLink + ')',
    };
  }
}
