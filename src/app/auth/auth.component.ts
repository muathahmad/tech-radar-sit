import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"]
})
export class AuthComponent implements OnInit {
  url: string = "https://tech-radar.auth.us-east-1.amazoncognito.com/login?client_id=48peu6k6174p3hr59b6fjn3ov&response_type=code&scope=aws.cognito.signin.user.admin+email+http%3A%2F%2Flocalhost%3A8080%2Ftype+openid+profile&redirect_uri=https%3A%2F%2Flocalhost%3A8080%2Fcallback";

  constructor() {
    window.open(this.url, "_blank");
  }

  ngOnInit() {
  }

}
