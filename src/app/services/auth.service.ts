// Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Librarys
import { Observable } from 'rxjs';

// Models
import { AuthenResponse } from '../models/auth-response';
import { Credential } from '../models/credential';

// Env
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string;

  constructor(private _http: HttpClient) { }

  authen(credential: Credential): Observable<AuthenResponse> {
    return this._http.post<AuthenResponse>(`${environment.api_url}/auth/login`, credential);
  }

  setToken(token: string) {
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }

  isLogin(): Boolean {
   return !!this.token;
  }
}
