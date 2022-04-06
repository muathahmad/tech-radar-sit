import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewAdminComponent } from './view-admin/view-admin.component'
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ViewAdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'admin', component: ViewAdminComponent  }
    ])
  ],
  exports: [
    ViewAdminComponent
  ]
})
export class AdminModule { }
