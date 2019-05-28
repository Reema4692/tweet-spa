import { Component, OnInit } from '@angular/core';
import { TwitterService } from '../services/twitter.service';
import { ActivatedRoute, Router } from '@angular/router';

// import gql from 'graphql-tag';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  tweets = [];
  userInfo: any;
  notFound: boolean;

  constructor(private _twitterSer: TwitterService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    // this.apollo
    //   .watchQuery({
    //     query: gql`
    //     query {
    //       graphQLHub
    //       twitter {
    //         user(identifier: name, identity: "karmasakshi") {
    //           created_at
    //           description
    //           id
    //           screen_name
    //           name
    //           profile_image_url
    //           url
    //           tweets_count
    //           followers_count
    //           tweets(limit: 10) {
    //             text
    //           }
    //         }
    //       }
    //     }

    //     `,
    //   })
    //   .valueChanges.subscribe(result => {
    //     this.user = result.data;
    //     console.log(this.user);
    //   },
    //   err  => console.log(err)
    //   );
  }

  onSubmit(username: string) {
    if (username && username !== "") {
      this._twitterSer.getUserInfo(username).subscribe(response => {
        this.userInfo = response;

        if(this.userInfo){
          this._router.navigate([],{
            relativeTo: this._route,
            queryParams: {
              username: username
            }
          })
          this.notFound = false;
        }else{
          this.notFound = true;
        }
      })
    }
  }

}
