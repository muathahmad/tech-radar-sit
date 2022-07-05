import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RadarModule } from './radar/radar.module';
import { NgTechRadarModule } from 'projects/ng-tech-radar/src/public-api';
import { RadarService } from './radar/radar.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RadarModule,
    NgTechRadarModule,
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: () =>
          import('./radar/radar.module').then((m) => m.RadarModule),
      },
      {
        path: 'admin',
        loadChildren: () =>
          import('./admin/admin.module').then((m) => m.AdminModule),
      },
    ]),
    BrowserAnimationsModule,
  ],
  providers: [RadarService],
  bootstrap: [AppComponent],
})
export class AppModule {}
