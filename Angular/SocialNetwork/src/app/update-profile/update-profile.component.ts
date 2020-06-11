import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css'],
})
export class UpdateProfileComponent implements OnInit {
 // @Input('type') type;
  placeholderText;

  user = {
    fullName: '',
    picture:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    email:'',
    bio:'',
  };
  picture;
  constructor() {}

  ngOnInit(): void {
   // this.placeholderText = `Please enter your ${this.type}`;
    this.picture = {
      'background-image': 'url(' + this.user.picture + ')',
    };
  }
}
