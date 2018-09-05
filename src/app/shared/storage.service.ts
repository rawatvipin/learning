import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  isLoggedIn(): boolean {
    if (localStorage.getItem("userData"))
      return true;
    else
      return false;
  }

  setUserData(data) {
    localStorage.setItem("userData", JSON.stringify(data));
  }

  getUserData(): any {
    return JSON.parse(localStorage.getItem("userData"));
  }

  isAdmin(): boolean {
    const data = this.getUserData();
    if (data.email == "admin")
      return true;
    else
      return false;
  }

  clearUserData() {
    localStorage.removeItem("userData");
  }
}
