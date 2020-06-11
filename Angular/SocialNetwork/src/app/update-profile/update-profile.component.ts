import { HttpClient } from '@angular/common/http';
import { UserService } from './../services/user.service';
import { ImageUploadService } from './../services/image-upload.service';
import { Component, OnInit, Input } from '@angular/core';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css'],
})
export class UpdateProfileComponent implements OnInit {
  @Input('user') user;
  imageObj: File;
  imageUrl: SafeUrl;

  getImage() {
    let input = {
      username: 'kidx',
    };
    this.imageUploadService.getProfilePic(input).subscribe((x) => {
      console.log(x);
      let data = x[0];
      this.imageUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        'data:image/jpg;base64,' + data
      );
    });
  }

  //edit needs to have id and username, add the property to change

  picture;
  constructor(
    private sanitizer: DomSanitizer,
    private imageUploadService: ImageUploadService
  ) {}

  onImagePicked(event: Event): void {
    const FILE = (event.target as HTMLInputElement).files[0];
    this.imageObj = FILE;
  }
  onImageUpload() {
    const imageForm = new FormData();
    let username = 'kidx';
    imageForm.append('imageFile', this.imageObj, username + '.png');
    console.log(imageForm);
    this.imageUploadService.imageUpload(imageForm).subscribe((res) => {
      this.imageUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        'data:image/jpg;base64,' + res[0]
      );
    });
  }

  ngOnInit(): void {
    this.picture = {
      'background-image': 'url(' + this.user.picLink + ')',
    };
  }
}
