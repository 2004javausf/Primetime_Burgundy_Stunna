import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css'],
})
export class UpdateProfileComponent implements OnInit {
  @Input('user') user;

  //use *ngIf to display input elements and submit buttons when clicking on the ! symbol
  //make (submit) events and bind them to functions in .ts
  //
  picture;
  constructor() {}

  ngOnInit(): void {
    this.picture = {
      'background-image': 'url(' + this.user.picLink + ')',
    };
  }
}
