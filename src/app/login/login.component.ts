import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  public error = {
    display: false,
    msg: "Username/ password does not match"
  };
  public loginInfo = {
    username: '',
    password: ''
  };

  constructor(
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  public login() {

    console.log(this.loginInfo);

    let dataObj = {
      username: this.loginInfo.username,
      password: this.loginInfo.password
    }

    this.error.display = false;

    if (!dataObj.username || !dataObj.password) {
      this.error.display = true;
      this.error.msg = "Field can not be  empty";
    }

    if (!this.error.display) {
      this.loginService.login(dataObj).subscribe(res => {
        console.log(res);

        this.loginInfo = {
          username: '',
          password: ''
        };

        if (!res) {
          this.error.display = true;
          this.error.msg = "Username/ password does not match";
        } else {
          this.error.display = false;
          this.router.navigate(['/Core']);
        }
      })
    }
  }
}
