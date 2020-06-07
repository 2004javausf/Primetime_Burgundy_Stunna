import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {}
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
