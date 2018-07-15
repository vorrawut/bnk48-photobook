// Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Librarys
import { Observable } from 'rxjs';

// Enviroment
import { environment } from '../../environments/environment';
import { Member } from '../models/member';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private _http: HttpClient) { }

  getMemberDetailById(memberId: string): Observable<Member> {
    return this._http.get<Member>(`${environment.api_url}/bnk/members/${memberId}`);
  }
}
