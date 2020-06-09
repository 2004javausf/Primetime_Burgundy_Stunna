import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImageUploadService {
  url = 'https://www.googleapis.com/upload/drive/v3/files?uploadType=media';
  constructor(private http: HttpClient) {}
  imageUpload(imageForm: FormData) {
    console.log('image uploading');
    return this.http.post(this.url, imageForm);
  }
}
