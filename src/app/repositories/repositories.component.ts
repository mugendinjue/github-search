import { Component, OnInit } from '@angular/core';
import { HttpSeviceService } from '../services/http-sevice.service';
import { Repositories } from '../repositories';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  repoList : Repositories[];

  constructor(private repoService : HttpSeviceService) { }

  searchRepo(reponame :string){
    this.repoService.getRepoName(reponame).then(
      (resultrepo) =>{
        
        this.repoList = this.repoService.userRepo
        console.log(this.repoList)
    
      
      },(error)=>{
        console.log('error')
      });
  }

  ngOnInit() {
  }

}
