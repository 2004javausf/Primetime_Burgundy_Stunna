import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'user-content-input-form',
  templateUrl: './user-content-input-form.component.html',
  styleUrls: ['./user-content-input-form.component.css'],
})
export class UserContentInputFormComponent implements OnInit {
  @Input('type') type;
  @Input('user') user;

  placeholderText;
  image: SafeUrl;
  constructor(
    private httpClient: HttpClient,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.placeholderText = `Please enter your ${this.type}`;
    this.getImage();
  }
  getImage() {
    let input = {
      username: this.user.username,
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
