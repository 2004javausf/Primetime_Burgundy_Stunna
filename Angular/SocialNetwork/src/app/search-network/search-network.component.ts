import { UserService } from './../services/user.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { isNull } from 'util';

@Component({
  selector: 'search-network',
  templateUrl: './search-network.component.html',
  styleUrls: ['./search-network.component.css'],
})
export class SearchNetworkComponent implements OnInit {
  @Input('users') users;
  @Output() changeFocus = new EventEmitter();

  constructor(private userService: UserService) {}

  searchResult;

  //function that searches for user by username, returns list if their are multiple that match the search
  searchFor(input) {
    this.userService.searchForUser(input).subscribe((res) => {
      console.log(res);
      if (isNull(res)) {
        this.searchResult = 'none';
      } else {
        this.searchResult = res;
        console.log(this.searchResult);
      }
    });
  }
  //function that changes the user profile in the Profile-Information-Component
  selectNewFocus(user) {
    this.changeFocus.emit(user);
  }
  ngOnInit(): void {}
}
