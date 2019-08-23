import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {

  userName : string;
  @Output () gitUser = new EventEmitter<any>();

  searchUser(){
    this.gitUser.emit(this.userName);
  }


  constructor() { }

  ngOnInit() {
  }

}
