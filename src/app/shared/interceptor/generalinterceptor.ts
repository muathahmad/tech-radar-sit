import { Injectable } from "@angular/core";
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { CookieService } from "../services/cookie.service";

@Injectable({
  providedIn: "root"
})
export class GeneralInterceptor implements HttpInterceptor {

  constructor(
    private _cookieService: CookieService,
    private _router: Router
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this._cookieService.getCookie("id_token");
    if (!token) {
      return next.handle(request);
    }

    const modifiedReq = request.clone({
      headers: request.headers
        .set("Authorization", this._cookieService.getCookie("id_token") ?
          "bearer " + this._cookieService.getCookie("id_token") : "")
    });
    return next.handle(modifiedReq);
  }
}
