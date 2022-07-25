import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgTechRadarModule } from "projects/ng-tech-radar/src/public-api";
import { ViewComponent } from "./view/view.component";
import { DetailsComponent } from "./details/details.component";
import { HttpClientModule } from "@angular/common/http";
import { RadarDataService } from "../shared/services/radar.data.service";
import { AdminModule } from "../admin/admin.module";
import { RadarRoutingModule } from "./radar-routing.module";

@NgModule({
  imports: [
    CommonModule,
    NgTechRadarModule,
    AdminModule,
    HttpClientModule,
    RadarRoutingModule
  ],
  declarations: [ViewComponent, DetailsComponent],
  exports: [ViewComponent],
  providers: [RadarDataService]
})

export class RadarModule {
  constructor() {
  }
}
