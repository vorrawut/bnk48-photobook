// Angular
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

// Service
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private _auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group(
      {
        login: '',
        password: ''
      }
    );

    this.loginForm.markAsPristine();
    this.loginForm.markAsUntouched();
  }

  login() {
    this._auth.authen(this.loginForm.value)
      .subscribe(data => {
        this._auth.setToken(data.token);
        this.router.navigate(['/admin']);
      },
        error => alert(error.message));
  }

}
