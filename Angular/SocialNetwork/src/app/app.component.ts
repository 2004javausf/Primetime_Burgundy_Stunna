import { ImageUploadService } from './services/image-upload.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // imageObj: File;
  // imageUrl: string;
  // constructor(private imageUploadService: ImageUploadService) {}
  // onImagePicked(event: Event): void {
  //   const FILE = (event.target as HTMLInputElement).files[0];
  //   this.imageObj = FILE;
  // }
  // onImageUpload() {
  //   const imageForm = new FormData();
  //   imageForm.append('image', this.imageObj, this.imageObj.name);
  //   this.imageUploadService.imageUpload(imageForm).subscribe((res) => {
  //     this.imageUrl = res['image'];
  //   });
  // }
}

//HttpClient Example
// url = 'http://ec2-3-133-98-43.us-east-2.compute.amazonaws.com:9000/users';
// testText;
// constructor(private http: HttpClient) {}

// ngOnInit() {
//   this.http.get(this.url).subscribe(
//     (response) => response,
//     (error) => {
//       console.log((this.testText = error.error.text));
//     }
//   );
// }

//Angular Basics
// <div>
//   <div>total:{{ myTotal }}</div>

//   <button (click)="onClick()">like</button>

//   <div *ngIf="isShown">
//     <div *ngFor="let a of anythingElse">
//       {{ a }}
//     </div>
//   </div>

//   <div *ngIf="isShown">
//     Can you see me?
//   </div>
// </div>

//  //interpolation
//  myTotal = 1;

//  //eventBinding
//  onClick() {
//    this.isShown = !this.isShown;
//  }

//  //ngFor
//  anythingElse = [1, 2, 3, 4];

//  //ngIf
//  isShown = false;

//  //@Input

//  //@Output
