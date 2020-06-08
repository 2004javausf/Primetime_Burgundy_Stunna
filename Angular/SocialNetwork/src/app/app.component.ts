import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}

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
