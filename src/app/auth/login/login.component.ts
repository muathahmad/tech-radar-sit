import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  from: any = {
    username: null,
    password: null
  }
  isLoggedIn = false;
  isLoginFaild = false;

  onSubmit(): void {
    const {username, password}=this.from;
    this.authService.login(username,password).subscribe({
      next: (data: any) =>
      this.authService.saveToken(data.accessToken)
    })
  }

  ngOnInit() {
    if(this.authService.getToken()){
      this.isLoggedIn = true
    }
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  hide = true;

  constructor(private authService: AuthService) {

   }



}
