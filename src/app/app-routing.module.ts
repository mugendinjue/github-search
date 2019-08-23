import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubSearchComponent } from './github-search/github-search.component';
import { UserDisplayComponent } from './user-display/user-display.component';
import { ErrorComponent } from './error/error.component';




const routes: Routes = [
  {path:'home',component:GithubSearchComponent},
  {path: 'search',component:UserDisplayComponent},
  {'pathMatch':'full','redirectTo':'home','path':''},
  { path : '**',component:ErrorComponent }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
