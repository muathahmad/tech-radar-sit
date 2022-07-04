import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgTechRadarModule } from "projects/ng-tech-radar/src/public-api";

import { RadarComponent } from "./radar.component";
import { ViewComponent } from "./view/view.component";
import { DetailsComponent } from "./details/details.component";
import { HttpClientModule } from "@angular/common/http";
import { RadarService } from "./radar.service";
import { AdminModule } from "../admin/admin.module";
import { MatSnackBarModule } from "@angular/material/snack-bar";

@NgModule({
  imports: [
    CommonModule,
    NgTechRadarModule,
    AdminModule,
    HttpClientModule,
    MatSnackBarModule,
    RouterModule.forChild([
      { path: "", component: ViewComponent },
      { path: "details", component: DetailsComponent }
    ])
  ],
  declarations: [RadarComponent, ViewComponent, DetailsComponent],
  exports: [ViewComponent],
  providers: [RadarService]
})
export class RadarModule {
  constructor() {
  }
}
