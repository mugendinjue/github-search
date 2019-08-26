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
  repoDisplay : any ;
 



  constructor(public httpService : HttpSeviceService) { }

  gitUserName(user){
     this.httpService.searchUser(user).then(
      (result) =>{
        this.resultDisplay = this.httpService.user
        this.repoDisplay = this.httpService.searchRepos;
      },(error)=>{
        console.log('error')
      });

      this.httpService.getSearchRepos(user).then((resultData)=>{
        this.repoDisplay = this.httpService.searchRepos
        console.log(this.repoDisplay);
      },(error)=>{
        console.log('error');
      });
    
  }


  ngOnInit() {
    this.gitUserName('Dcode-M');
  }

}
