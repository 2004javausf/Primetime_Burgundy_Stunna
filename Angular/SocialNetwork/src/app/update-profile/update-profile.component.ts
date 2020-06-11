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
  edit = false;

  ngOnInit() {
    this.getImage();
  }
  constructor(
    private httpClient: HttpClient,
    private sanitizer: DomSanitizer
  ) {}

  selectedFile: File;
  image: SafeUrl;

  toggleEdit() {
    this.edit = !this.edit;
  }
  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile.name);
  }
  onUpload() {
    let username = this.user.username;
    let s = this.selectedFile.name;
    let j = s.split('.');
    let name = username + '.png';
    //let newFile : File = new File(, name , {type : this.selectedFile.type});
    let imageData = new FormData();
    imageData.append('imageFile', this.selectedFile, name);
    this.httpClient
      .post(
        'http://ec2-3-133-98-43.us-east-2.compute.amazonaws.com:9000/user/updateprofilepic',
        imageData
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
