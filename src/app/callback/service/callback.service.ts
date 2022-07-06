import { Injectable, OnDestroy } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, Subscription } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { AuthPostInterface } from "../../shared/interfaces/interface";

@Injectable()
export class CallbackService implements OnDestroy {
  callbackParams: Subscription = new Subscription();
  params: any;

  constructor(
    private _http: HttpClient,
    private _router: ActivatedRoute
  ) {
    this.callbackParams = this._router.queryParams.subscribe((params) => {
      this.params = params;
    });
  }

  ngOnDestroy() {
    this.callbackParams.unsubscribe();
  }

  authPost() {
    const postBody = this._preparePostBody();
    const header = new HttpHeaders()
      .set("Content-Type", "application/x-www-form-urlencoded")
      .set("Authorization", "Basic NDhwZXU2azYxNzRwM2hyNTliNmZqbjNvdjo5NTlxZXM2b2VjMG5uM2Zma2Y5MzNyNmE3b3AwamduN2s1amVzNWFqMnF0bjFqMjlvcXU=");

    return this._http.post<Observable<AuthPostInterface>>(
      "https://tech-radar.auth.us-east-1.amazoncognito.com/oauth2/token", postBody, { headers: header }
    );
  }

  private _preparePostBody() {
    let bodyObject = new URLSearchParams();
    bodyObject.set("grant_type", "authorization_code");
    bodyObject.set("client_id", "48peu6k6174p3hr59b6fjn3ov");
    bodyObject.set("redirect_uri", "http://localhost:8080/callback");
    bodyObject.set("code", this.params.code);

    return bodyObject;
  }
}
