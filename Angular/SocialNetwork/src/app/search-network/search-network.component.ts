import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'search-network',
  templateUrl: './search-network.component.html',
  styleUrls: ['./search-network.component.css'],
})
export class SearchNetworkComponent implements OnInit {
  @Input('users') users;

  constructor() {}

  ngOnInit(): void {}
}
