import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})

export class ServerService {
  readonly _base_URL = "http://13.127.74.198";
  private _header = new HttpHeaders({
    "Content-Type": "application/json"
  });

  constructor(private http: HttpClient) { }

  loginService(loginCredential: object): Observable<HttpResponse<object>> {
    return this.http.post(this._base_URL + '/users/login', loginCredential, { headers: this._header, observe: 'response' });
  }

  fetchTimeTable(id: string) : Observable<User>{
    const _header2 = new HttpHeaders({
      'x-auth':localStorage.getItem('token')
    });
    return this.http.get<User>(this._base_URL + `/users/${id}`, {headers:_header2});
  }
}
