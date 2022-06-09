import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { ViewComponent } from '../radar/view/view.component';
import { ViewAdminComponent } from '../admin/view-admin/view-admin.component';





@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'login', component: LoginComponent}
    ]),
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    RouterModule.forChild([
      {path:"", component: LoginComponent},
      { path: '', component:ViewAdminComponent}
    ])
  ],
  declarations: [AuthComponent,LoginComponent],
  exports:[
    LoginComponent,
    HttpClientModule
  ],
  providers: [AuthService]
})
export class AuthModule {
  constructor(auth: AuthService){

  }
 }
