import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
// import { InMemoryCache } from 'apollo-cache-inmemory';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserDetailsComponent } from './user-details/user-details.component'
import { AuthService } from './services/auth.service';
import { LoginSuccessComponent } from './login-success/login-success.component';
import { TwitterService } from './services/twitter.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UserDetailsComponent,
    PageNotFoundComponent,
    LoginSuccessComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    TwitterService
    // {
    //   provide: APOLLO_OPTIONS,
    //   useFactory: (httpLink: HttpLink) => {
    //     return {
    //       cache: new InMemoryCache(),
    //       link: httpLink.create({
    //         uri: "https://www.graphqlhub.com/graphql"
    //       })
    //     }
    //   },
    //   deps: [HttpLink]
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
