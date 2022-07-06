import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RadarModule } from './radar/radar.module';
import { NgTechRadarModule } from 'projects/ng-tech-radar/src/public-api';
import { RadarDataService } from './shared/services/radar.data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CallbackModule } from "./callback/callback.module";
import { HeaderComponent } from './shared/components/header/header.component';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { GeneralInterceptor } from "./shared/interceptor/generalinterceptor";

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    RadarModule,
    NgTechRadarModule,
    CallbackModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [
    RadarDataService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GeneralInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
