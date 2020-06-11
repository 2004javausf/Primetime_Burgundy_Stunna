import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private httpClient: HttpClient,
    private sanitizer: DomSanitizer
  ) {}
  selectedFile: File;
  image: SafeUrl;
  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile.name);
  }
  onUpload() {
    let username = 'samsora';
    let s = this.selectedFile.name;
    let j = s.split('.');
    let name = username + '.png';
    //let newFile : File = new File(, name , {type : this.selectedFile.type});
    let imageData = new FormData();
    imageData.append('imageFile', this.selectedFile, name);
    this.httpClient
      .post('http://ec2-3-133-98-43.us-east-2.compute.amazonaws.com:9000/user/updateprofilepic', imageData)
      .subscribe((x) => {
        console.log(x);
      });
  }
  getImage() {
    let input = {
      username: (document.getElementById('usr') as HTMLInputElement).value,
    };
    this.httpClient
      .post('http://ec2-3-133-98-43.us-east-2.compute.amazonaws.com:9000/user/getprofilepic', input)
      .subscribe((x) => {
        let data = x[0];
        this.image = this.sanitizer.bypassSecurityTrustResourceUrl(
          'data:image/jpg;base64,' + data
        );
      });
  }
}
