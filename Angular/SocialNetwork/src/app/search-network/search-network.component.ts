import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'search-network',
  templateUrl: './search-network.component.html',
  styleUrls: ['./search-network.component.css'],
})
export class SearchNetworkComponent implements OnInit {
  @Input('users') users;
  focus;
  constructor() {}

  submitSearch(Input){
    console.log(Input);
    this.focus = true;

    this.users; 
  }

  ngOnInit(): void {
  }
}
