import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'user-content-input-form',
  templateUrl: './user-content-input-form.component.html',
  styleUrls: ['./user-content-input-form.component.css'],
})
export class UserContentInputFormComponent implements OnInit {
  @Input('type') type;
  placeholderText;

  user = {
    fullName: 'user.fullName',
    picture:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  };
  picture;
  constructor() {}

  ngOnInit(): void {
    this.placeholderText = `Please enter your ${this.type}`;
    this.picture = {
      'background-image': 'url(' + this.user.picture + ')',
    };
  }
}
