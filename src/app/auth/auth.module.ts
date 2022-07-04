import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthComponent } from "./auth.component";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { AuthService } from "./auth.service";
import { HttpClientModule } from "@angular/common/http";
import { MatInputModule } from "@angular/material/input";
import { ViewAdminComponent } from "../admin/view-admin/view-admin.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "login", component: AuthComponent }
    ]),
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    RouterModule.forChild([
      { path: "", component: AuthComponent },
      { path: "", component: ViewAdminComponent }
    ])
  ],
  declarations: [AuthComponent],
  exports: [
    HttpClientModule
  ],
  providers: [AuthService]
})
export class AuthModule {
  constructor() {
  }
}
