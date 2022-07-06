import { Component } from "@angular/core";
import { RadarDataService } from "../../shared/services/radar.data.service";
import { IEntry, RadarMapDetails } from "../../../../projects/ng-tech-radar";

@Component({
  selector: "app-view",
  templateUrl: "./view.component.html",
  styleUrls: ["./view.component.scss"]
})
export class ViewComponent {
  radarEntries: IEntry[] = [];

  radarConfig: RadarMapDetails = {
    title: "Sitech Radar",
    width: 1500,
    height: 1000,
    colors: {
      background: "#fff",
      grid: "#bbb",
      inactive: "#ddd"
    },
    print_layout: true
  };

  constructor(
    private radarDataService: RadarDataService
  ) {
    this._displayRadarEntry();
    this._displayRadarSetting();
  }

  private _displayRadarEntry() {
    this.radarDataService.getRadarEntry().subscribe({
      next: (response: any) => {
        this.radarEntries = response.data;
      }
      // error: err => {}
    });
  }

  private _displayRadarSetting() {
    this.radarDataService.getRadarSettings().subscribe({
      next: (response: any) => {
        this.radarConfig = Object.assign({}, this.radarConfig, response);
      }
      // error: err => {}
    });
  }
}
