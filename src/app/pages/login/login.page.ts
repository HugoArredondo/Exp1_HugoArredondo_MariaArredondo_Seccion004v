import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  login = {
    user: '',
    pass: '',
  }

  constructor() { }

  ngOnInit() {
  }
  
  onSubmit(){
    console.log('submit');
    console.log(this.login);
  }
}
