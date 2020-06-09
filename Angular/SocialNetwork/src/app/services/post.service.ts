import { Comment } from './../interfaces/Comment';
import { Post } from './../interfaces/Post';
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
  getTestPosts(): Post[] {
    return [
      {
        id: 1,
        userFullName: 'post.userFullName',
        userPicture:
          'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        text: 'post.text',
        link: 'post.link',
        isLiked: true,
        likeCount: 10,
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
        id: 2,
        userFullName: 'post.userFullName',
        userPicture:
          'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        text: 'post.text',
        link: 'post.link',
        isLiked: false,
        likeCount: 5,
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
