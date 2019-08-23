import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users  } from '../users';
import { environment } from '../../environments/environment';
// import { resolve } from 'dns';
// import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class HttpSeviceService {

  user : Users;

  constructor(private http : HttpClient ) { }

  searchUser(userN){
    interface Result{
      avatar_url:string;
      login : string;
      public_repo:string;
      repos_url:string;
      followers:string;
      following:string;
    }
    let promise = new Promise ((resolve,reject)=>{
      this.http.get<Result>('https://api.github.com/users/'+userN+'?access_token='+environment.apiKey).toPromise().then(
        (result)=>{
      this.user = new Users(result.login,result.avatar_url,result.public_repo,result.followers,result.following)
      resolve()
        },(error)=>{
          console.log(error);
          reject(error);

        })
    })
    return promise
  }

}