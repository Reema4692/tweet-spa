import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { TwitterService } from '../services/twitter.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

fdescribe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let twitterService: TwitterService;
  let router: Router;

  let mockUserInfo = of({
      "user": {
        "created_at": "",
        "description": "",
        "id": "",
        "screen_name": "test",
        "name": "",
        "tweets": []
      }
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent,UserDetailsComponent ],
      imports: [ RouterTestingModule, HttpClientModule],
      providers: [TwitterService,
        {provide: Router, useClass: MockRouter},
        {provide: ActivatedRoute, useClass: MockActivatedRoute}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    twitterService = fixture.debugElement.injector.get(TwitterService);
    router = fixture.debugElement.injector.get(Router);
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should test onsubmit', () => {
    let userName = "karmasakshi";
    spyOn(twitterService,"getUserInfo").and.returnValue(mockUserInfo);
    spyOn(router,"navigate");
    component.onSubmit(userName);
    expect(component.userInfo.user.screen_name).toBe("test");
  });
});


export class MockRouter{
  navigate(){
      return null;
  }
}

export class MockActivatedRoute{
  
}