import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class UserLikesService {
  constructor() {}
  getLikeCount(): number {
    return 10;
  }
  getIsLiked(): boolean {
    return true;
  }
}
