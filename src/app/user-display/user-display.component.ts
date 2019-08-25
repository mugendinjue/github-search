import { Component, OnInit } from '@angular/core';
import { HttpSeviceService } from '../services/http-sevice.service';
import { Users } from '../users';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css']
})
export class UserDisplayComponent implements OnInit {

  resultDisplay:Users;



  constructor(public httpService : HttpSeviceService) { }

  gitUserName(user){
     this.httpService.searchUser(user).then(
      (result) =>{
        this.resultDisplay = this.httpService.user
        console.log(this.resultDisplay);
      },(error)=>{
        console.log('error')
      });
    
  }

  ngOnInit() {
    this.gitUserName('washuCode');
  }

}
