import { EventEmitter } from '@angular/core';
import { Component, OnInit, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'profile-information',
  templateUrl: './profile-information.component.html',
  styleUrls: ['./profile-information.component.css'],
})
export class ProfileInformationComponent implements OnInit {
  @Input('focus') user;

  focusUser;
  image;
  constructor(
    private httpClient: HttpClient,
    private sanitizer: DomSanitizer
  ) {}
  ngOnInit(): void {
    this.focusUser = this.user;
    this.getImage();
  }

  getImage() {
    let input = {
      username: this.focusUser.username,
    };
    this.httpClient
      .post(
        'http://ec2-3-133-98-43.us-east-2.compute.amazonaws.com:9000/user/getprofilepic',
        input
      )
      .subscribe(
        (x) => {
          let data = x[0];
          this.image = this.sanitizer.bypassSecurityTrustResourceUrl(
            'data:image/jpg;base64,' + data
          );
        },
        (error) => {
          console.log('no such user');
          this.image =
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png';
        }
      );
  }
}
