import { Injectable } from "@angular/core";
import { CookieService } from "./cookie.service";

@Injectable({
  providedIn: "root"
})
export class AuthService {

  constructor(private _cookiesService: CookieService) {
  }
  openAuthWindow() {
    const amazonAuthURL: string = "https://tech-radar.auth.us-east-1.amazoncognito.com/login?client_id=48peu6k6174p3hr59b6fjn3ov&response_type=code&scope=aws.cognito.signin.user.admin+email+http%3A%2F%2Flocalhost%3A8080%2Ftype+openid+profile&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fcallback";
    window.open(amazonAuthURL);
  }

  logout() {
    this._cookiesService.deleteCookie("id_token");
    this._cookiesService.deleteCookie("refresh_token");
  }
}
