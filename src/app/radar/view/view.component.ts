import { Component, OnInit } from "@angular/core";
import { RadarService } from "../radar.service";
import { IEntry, RadarMapDetails } from "../../../../projects/ng-tech-radar";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-view",
  templateUrl: "./view.component.html",
  styleUrls: ["./view.component.scss"]
})
export class ViewComponent implements OnInit {
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

  constructor(private radarService: RadarService,
              private _snackBar: MatSnackBar) {
    this._displayRadarEntry();
    this._displayRadarSetting();
  }

  ngOnInit() {
  }

  private _displayRadarEntry() {
    this.radarService.getRadarEntry().subscribe({
      next: (response: any) => {
        this.radarEntries = response.data;
      }
    });
  }

  private _displayRadarSetting() {
    this.radarService.getRadarSettings().subscribe({
      next: (response: any) => {
        this.radarConfig = Object.assign({}, this.radarConfig, response);
      }
    });
  }
}
