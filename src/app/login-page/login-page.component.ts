import { Component } from '@angular/core';
declare var name: any;
@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']

})
export class LoginPageComponent{

  ngOnInit(): void {
    new name();
  }

  title = 'app-js';
}
