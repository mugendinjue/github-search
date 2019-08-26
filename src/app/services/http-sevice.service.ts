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
  repos : any = [];
  searchRepos : any = [];
  userRepo : Repositories[];
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
          this.repos.push(Result);
          (resolve)
      },(error)=>{
        console.log(error);
        reject(error);
      })
    })
    return promise
  }

  getSearchRepos(userN){
    interface dataSearch{
      name:string;
      html_url:string;
      description:string;
      created_at:Date;
    }
    
    let promise = new Promise ((resolve,reject)=>{
      this.http.get<dataSearch>('https://api.github.com/users/'+userN+'/repos?order=created&sort=asc?access_token='+this.access_token).toPromise().then(
        (resultData)=>{
          this.searchRepos = [];
          this.searchRepos.push(resultData);
          (resolve)
      },(error)=>{
        console.log(error);
        reject(error);
      })
    })
    return promise
  }

  getRepoName(reponame){
    interface datarepo{
      name:string;
      html_url:string;
      description:string;
      created_at:Date;
    }
    
    let promise = new Promise ((resolve,reject)=>{
      this.http.get<datarepo>("https://api.github.com/search/repositories?q="+reponame+"&per_page="+10+"&sort=forks&order=asc?access_token="+this.access_token).toPromise().then(
        (resultrepo)=>{
          this.userRepo = [];
          for(let i=0; i<10; i++){
            let repositoriesname = resultrepo["items"][i]["full_name"];
            let repoDescription = resultrepo ["items"][i]["description"];
            let repoUrl = resultrepo ["items"][i]["html_url"]
            let repo = new Repositories(repositoriesname,repoDescription,repoUrl);
            this.userRepo.push(repo);
          }
          
          (resolve)
      },(error)=>{
        console.log(error);
        reject(error);
      })
    })
    return promise
  }

}
