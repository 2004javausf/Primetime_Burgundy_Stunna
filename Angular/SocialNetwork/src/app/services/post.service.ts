import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PostService {
  constructor() {}
  getPostIDsByUser(userID) {
    return ["post.title"];
  }
  getPost() {
    return [
      {
        id: "post.title",
        userFullName: "post.userFullName",
        userPicture:
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        text: "post.text",
        link: "post.link",
        isLiked: "post.isLiked",
        likeCount: "post.likeCount",
        comments: [
          {
            commenter: "comments.userFullname",
            picture:
              "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            text: "comment.text1",
          },
          {
            commenter: "comments.userFullname",
            picture:
              "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            text: "comment.text2",
          },
          {
            commenter: "comments.userFullname",
            picture:
              "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            text: "comment.text3",
          },
        ],
      },
      {
        id: "post.title",
        userFullName: "post.userFullName",
        userPicture:
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        text: "post.text",
        link: "post.link",
        isLiked: "post.isLiked",
        likeCount: "post.likeCount",
        comments: [
          {
            commenter: "comments.userFullname",
            picture:
              "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            text: "comment.text1",
          },
          {
            commenter: "comments.userFullname",
            picture:
              "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            text: "comment.text2",
          },
          {
            commenter: "comments.userFullname",
            picture:
              "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            text: "comment.text3",
          },
        ],
      },
    ];
  }
}
