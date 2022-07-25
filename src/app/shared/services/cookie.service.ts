import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CookieService {
  private _user: boolean = false;

  public get isLoggedInUser() {
    return this.getCookie("id_token")?.length ? this._user = true : this._user = false;
  }

  constructor() {
  }

  deleteCookie(cookie: string) {
    document.cookie = cookie + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;";
  }

  public getCookie(name: string): string {
    let ca: Array<string> = document.cookie.split(";");
    let caLen: number = ca.length;
    let cookieName = `${name}=`;
    let c: string;

    for (let i: number = 0; i < caLen; i += 1) {
      c = ca[i].replace(/^\s+/g, "");
      if (c.indexOf(cookieName) == 0) {
        return c.substring(cookieName.length, c.length);
      }
    }
    return "";
  }

  public setCookie(cookie: { key: string, value: string }) {
    document.cookie = `${cookie.key}=${cookie.value};secure=true`;
  }
}
