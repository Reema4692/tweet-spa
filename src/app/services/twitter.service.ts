import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class TwitterService{
    baseUrl = "http://localhost:3000/twitter";

    constructor(private http: HttpClient){ }

    getUserInfo(username: string){
        return this.http.get<any>(this.baseUrl).pipe(
            map(data => {
                if(data && data.user && (data.user.screen_name === username)){
                    return data;
                }
            })
        )
    }
}