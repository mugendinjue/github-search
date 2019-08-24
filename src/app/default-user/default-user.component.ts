import { Component, OnInit } from '@angular/core';
import { HttpSeviceService } from '../services/http-sevice.service';
import { Users } from '../users';
import { Repositories } from '../repositories';

@Component({
  selector: 'app-default-user',
  templateUrl: './default-user.component.html',
  styleUrls: ['./default-user.component.css']
})
export class DefaultUserComponent implements OnInit {

  myGithub : Users ;
  myRepos : any ;

  constructor(private defaultService : HttpSeviceService) { }

  gitUserName(user){
    this.defaultService.searchUser(user).then(
     (result) =>{
       
       this.myGithub = this.defaultService.user
       this.myRepos = this.defaultService.repos
       console.log(this.myRepos)
     },(error)=>{
       console.log('error')
     });
   
 }
  gitRepos(user){
    this.defaultService.getRepos(user).then((Result)=>{
      this.myRepos = this.defaultService.repos
      console.log(this.myRepos);
    },(error)=>{
      console.log(error)
    })
  }

  ngOnInit() {
    this.gitUserName('mugendinjue');
    this.gitRepos('mugendinjue');
  }

}
