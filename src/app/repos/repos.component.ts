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


  ngOnInit() {
  
  }

}
