//implemented this component to redirect to have a clean address bar 
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-success',
  templateUrl: './login-success.component.html',
  styleUrls: ['./login-success.component.css']
})
export class LoginSuccessComponent implements OnInit {

  constructor(private router: Router) {
    router.navigate(['/home']);
   }

  ngOnInit() {
  }

}
