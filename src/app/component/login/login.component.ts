// Angular
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private _http: HttpClient) { }

  ngOnInit() {
    this.loginForm = this.fb.group(
      {
        login: '',
        password: ''
      }
    );
  }

  login() {
    console.log(this.loginForm.value);
    this._http.post(`${environment.api_url}/auth/login`, this.loginForm.value)
      .subscribe(data => console.log(data));
  }

}
