import { Component, OnInit } from "@angular/core";
import { RadarService } from "../radar.service";
import { IEntry, RadarMapDetails } from "../../../../projects/ng-tech-radar";
import { catchError } from "rxjs";
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
    width: 100,
    height: 100,
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
    this.radarService.getRadarDate().pipe(catchError((error: any) => {
      this._snackBar.open("Something went wrong with getting data from Entry API", "", {
        panelClass: "bg-btnSecondaryHover",
        duration: 5000
      });
      return error;
    })).subscribe((data: any) => {
      this.radarEntries = data.data;
    });
  }

  private _displayRadarSetting() {
    this.radarService.getRadarSettings().pipe(catchError((error: any) => {
      this._snackBar.open("Something went wrong with getting data from Settings API", "", {
        panelClass: "bg-btnSecondaryHover",
        duration: 5000
      });
      return error;
    })).subscribe((data: any) => {
      this.radarConfig = Object.assign({}, this.radarConfig, data);
    });
  }
}
