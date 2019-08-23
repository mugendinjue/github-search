import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubSearchComponent } from './github-search/github-search.component';




const routes: Routes = [
  // {path:'home','component':GithubSearchComponent},
 
  // {'pathMatch':'full','redirectTo':'home','path':'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
