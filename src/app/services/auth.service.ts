// Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Librarys
import { Observable } from 'rxjs';

// Models
import { AuthResponse } from '../models/auth-response';
import { Credential } from '../models/credential';

// Env
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }

  authen(credential: Credential): Observable<AuthResponse> {
    return this._http.post<AuthResponse>(`${environment.api_url}/auth/login`, credential);
  }
}
