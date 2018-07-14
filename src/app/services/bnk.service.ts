// Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Models
import { Member } from '../models/member';

// env
import { environment } from '../../environments/environment';
import { Observable } from '../../../node_modules/rxjs';
import { Feed } from '../models/feed';

@Injectable({
  providedIn: 'root'
})
export class BnkService {

  constructor(private http: HttpClient) { }

  list(): Observable<Member[]> {
    return this.http.get<Member[]>(`${environment.api_url}/bnk/members`);
  }

  instagram(id: string): Observable<Feed> {
    return this.http.get<Feed>(`${environment.instagram_api_url}${id}`);
  }
}
