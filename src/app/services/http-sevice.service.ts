import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users  } from '../users';
import { environment } from '../../environments/environment';
import { Repositories } from '../repositories';

@Injectable({
  providedIn: 'root'
})
export class HttpSeviceService {

  user : Users;
  repos : any;
  private access_token  = environment.access_token;

  constructor(private http : HttpClient ) { }

  searchUser(userN){
    interface Result{
      avatar_url:string;
      login : string;
      public_repo:string;
      repos_url: any;
      followers:string;
      following:string;
      created_at:any;
      public_repos:string;
      
    }

    
    let promise = new Promise ((resolve,reject)=>{
      this.http.get<Result>('https://api.github.com/users/'+userN+'?access_token='+this.access_token).toPromise().then(
        (result)=>{
      this.user = new Users(result.login,result.avatar_url,result.followers,result.following,result.created_at,result.public_repos);
      resolve()
        },(error)=>{
          console.log(error);
          reject(error);

        })
    })
    return promise
  }
  getRepos(userN){
    interface dataGet{
      name:string;
      html_url:string;
      description:string;
      created_at:Date;
    }
    
    let promise = new Promise ((resolve,reject)=>{
      this.http.get<dataGet>('https://api.github.com/users/'+userN+'/repos?order=created&sort=asc?access_token='+this.access_token).toPromise().then(
        (Result)=>{
          this.repos = Result;
          console.log(this.repos);
          (resolve)
      },(error)=>{
        console.log(error);
        reject(error);
      })
    })
    return promise
  }

}
