import { Component, OnInit } from '@angular/core';
import { HttpSeviceService } from '../services/http-sevice.service';
import { Users } from '../users';

@Component({
  selector: 'app-default-user',
  templateUrl: './default-user.component.html',
  styleUrls: ['./default-user.component.css']
})
export class DefaultUserComponent implements OnInit {

  myGithub : Users ;

  constructor(private defaultService : HttpSeviceService) { }

  gitUserName(user){
    this.defaultService.searchUser(user).then(
     (result) =>{
       
       this.myGithub = this.defaultService.user
       console.log(this.myGithub);
     },(error)=>{
       console.log('error')
     });
   
 }

  ngOnInit() {
    this.gitUserName('mugendinjue');
    // this.gitUserName('mugendinjue');
    // console.log(this.myGithub);
  }

}
