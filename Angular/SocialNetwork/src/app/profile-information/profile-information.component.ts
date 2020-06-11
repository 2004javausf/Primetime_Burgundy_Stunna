import { EventEmitter } from '@angular/core';
import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'profile-information',
  templateUrl: './profile-information.component.html',
  styleUrls: ['./profile-information.component.css'],
})
export class ProfileInformationComponent implements OnInit {
  @Input('focus') user;

  picture;
  constructor() {}

  ngOnInit(): void {
    this.picture = {
      'background-image': 'url(' + this.user.picLink + ')',
    };
  }
}
