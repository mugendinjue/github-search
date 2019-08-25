import { Component, OnInit } from '@angular/core';
import { HttpSeviceService } from '../services/http-sevice.service';
import { Users } from '../users';
import { Repositories } from '../repositories';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  myRepos : any ;

  constructor(private defaultService : HttpSeviceService) { }

  // gitRepos(user){
  //   this.defaultService.getRepos(user).then((Result)=>{
  //     this.myRepos = this.defaultService.repos
  //     console.log(this.myRepos);
  //   },(error)=>{
  //     console.log(error)
  //   })
  // }

  ngOnInit() {
    // this.gitRepos('mugendinjue')
  }

}
