import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GithubSearchComponent } from './github-search/github-search.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { UserDisplayComponent } from './user-display/user-display.component';
import { ErrorComponent } from './error/error.component';
import { DefaultUserComponent } from './default-user/default-user.component';
import { ReposComponent } from './repos/repos.component';
import { HighlightDirective } from './highlight.directive';
import { DateCounterPipe } from './date-counter.pipe';
import { UpercasePipe } from './upercase.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GithubSearchComponent,
    UserSearchComponent,
    UserDisplayComponent,
    ErrorComponent,
    DefaultUserComponent,
    ReposComponent,
    HighlightDirective,
    DateCounterPipe,
    UpercasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
