import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { CallbackService } from "./service/callback.service";
import { CookieService } from "../shared/services/cookie.service";

@Component({
  selector: "app-callback",
  templateUrl: "./callback.component.html",
  styleUrls: ["./callback.component.scss"]
})
export class CallbackComponent {

  constructor(
    private _callbackService: CallbackService,
    private _route: Router,
    private _cookiesService: CookieService) {
    this._callbackService.authPost().subscribe((result: any) => {
      this._cookiesService.setCookie({
        key: "id_token",
        value: result.id_token
      });
      this._cookiesService.setCookie({
        key: "refresh_token",
        value: result.refresh_token
      });
      this._route.navigate([""]);
    });
  }
}


