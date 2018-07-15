// Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Librarys
import { Observable } from 'rxjs';

// Models
import { Member } from '../models/member';
import { Feed } from '../models/feed';

// env
import { environment } from '../../environments/environment';

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
