import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewAdminComponent } from './view-admin/view-admin.component'
import { RouterModule } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import { NgTechRadarModule } from 'projects/ng-tech-radar/src/public-api';

@NgModule({
  declarations: [
    ViewAdminComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    RouterModule.forChild([
      {path: 'admin', component: ViewAdminComponent  }
    ]),
    MatTableModule,
    MatInputModule,
    NgTechRadarModule,
    MatTabsModule
  ],
  exports: [
    ViewAdminComponent
  ]
})
export class AdminModule { }
