import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'profile-information',
  templateUrl: './profile-information.component.html',
  styleUrls: ['./profile-information.component.css'],
})
export class ProfileInformationComponent implements OnInit {
  @Input('type') type;
  placeholderText;

  user = {
    fullName: 'Harry Potter',
    picture:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    email: 'harrypotter@revature.com',
    bio: 'I like magic',
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
