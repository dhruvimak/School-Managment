import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userId: string;
  public userName: string;
  public userRole: string;
  constructor() { }

  login(id: string, userName: string, role: string) {
    this.userId = id;
    this.userRole = role;
    this.setUserName(userName);
  }

  isUserLoggedIn() :boolean {
    return !!localStorage.getItem('token');
  }

  logOutUser() {
    localStorage.clear();
  }

  getUserName(): string {
    return this.userName
  }

  setUserName(newName: string) {
    this.userName = newName;
  }

  getUserId(): string {
    return this.userId
  }

  getUserRole(): string {
    return this.userRole;
  }

  getToken(): string {
    return localStorage.getItem('token');
  }
}
