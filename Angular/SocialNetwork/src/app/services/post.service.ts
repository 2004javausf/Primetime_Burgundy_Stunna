import { UserData } from './../interfaces/UserData';
import { UserLogin } from './../interfaces/UserLogin';
import { NewUser } from './../interfaces/NewUser';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  url = 'http://ec2-3-133-98-43.us-east-2.compute.amazonaws.com:9000/user';
  constructor(private httpClient: HttpClient) {}
  getPostIDsByUser(userID) {
    return ['post.id'];
  }

  validateUserLogin(input: UserLogin): Observable<UserData> {
    //TODO: match to actual URI extension
    return this.httpClient.post<UserData>(this.url + '/userlogin', input);
  }
  addUser(input: NewUser): Observable<UserData> {
    return this.httpClient.post<UserData>(this.url + '/adduser', input);
  }
  getPost() {
    return [
      {
        id: 'post.id',
        userFullName: 'post.userFullName',
        userPicture:
          'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        text: 'post.text',
        link: 'post.link',
        isLiked: 'post.isLiked',
        likeCount: 'post.likeCount',
        comments: [
          {
            commenter: 'comments.userFullname',
            picture:
              'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            text: 'comment.text1',
          },
          {
            commenter: 'comments.userFullname',
            picture:
              'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            text: 'comment.text2',
          },
          {
            commenter: 'comments.userFullname',
            picture:
              'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            text: 'comment.text3',
          },
        ],
      },
      {
        id: 'post.id',
        userFullName: 'post.userFullName',
        userPicture:
          'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        text: 'post.text',
        link: 'post.link',
        isLiked: 'post.isLiked',
        likeCount: 'post.likeCount',
        comments: [
          {
            commenter: 'comments.userFullname',
            picture:
              'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            text: 'comment.text1',
          },
          {
            commenter: 'comments.userFullname',
            picture:
              'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            text: 'comment.text2',
          },
          {
            commenter: 'comments.userFullname',
            picture:
              'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            text: 'comment.text3',
          },
        ],
      },
    ];
  }
}
