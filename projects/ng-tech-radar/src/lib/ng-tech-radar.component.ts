import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input, OnChanges,
  ViewChild
} from "@angular/core";
import { IEntry, RadarMapDetails } from "./helper/interface";
import { radarMaps } from "./helper/fallback";

@Component({
  selector: "lib-ng-tech-radar",
  templateUrl: "ng-tech-radar.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgTechRadarComponent implements OnChanges {
  @Input() techEntries: Array<IEntry> = [];
  @Input() techConfig: RadarMapDetails = radarMaps;

  @ViewChild("Radar") Radar: any;

  _config!: RadarMapDetails;

  constructor(private ref: ChangeDetectorRef) {
  }

  ngOnChanges() {
    this.renderFunc();
  }

  renderFunc() {
    if (!this.techConfig || !this.techEntries?.length || !(this.techConfig as RadarMapDetails).rings) {
      return;
    }

    (window as any)?.radar_visualization({
      svg_id: "radar",
      ...this.techConfig,
      entries: this.techEntries
    });

    this.ref.markForCheck();
  }
}
