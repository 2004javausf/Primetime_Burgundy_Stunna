import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  getTestUsers() {
    return [
      { id: 1, name: 'Maurie' },
      { id: 2, name: 'Andres' },
      { id: 3, name: 'Nathan' },
      { id: 4, name: 'Brad' },
    ];
  }
}
