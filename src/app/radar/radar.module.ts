import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgTechRadarModule } from 'projects/ng-tech-radar/src/public-api';

import { RadarComponent } from './radar.component';
import { ViewComponent } from './view/view.component';
import { DetailsComponent } from './details/details.component';
import { HttpClientModule } from '@angular/common/http';
import { RadarService } from './radar.service';

@NgModule({
  imports: [
    CommonModule,
    NgTechRadarModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: '', component: ViewComponent },
      { path: 'details', component: DetailsComponent }
    ])
  ],
  declarations: [RadarComponent, ViewComponent, DetailsComponent],
  exports: [ViewComponent],
  providers: [RadarService]
})
export class RadarModule {
  constructor(private radarService: RadarService) {

  }
}
