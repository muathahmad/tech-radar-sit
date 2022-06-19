import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { IEntry, RadarMapDetails } from './helper/interface';
import { radarMaps } from './helper/fallback';
import {radar_visualization} from "./helper/radar";

@Component({
  selector: 'lib-ng-tech-radar',
  templateUrl: 'ng-tech-radar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgTechRadarComponent implements OnChanges {
  @Input() techEnteries: Array<IEntry> = [];
  @Input() techConfig: RadarMapDetails = radarMaps;

  @ViewChild('Radar') Radar: any;

  _config!: RadarMapDetails;
  constructor(private ref: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.renderFunc();
  }

  renderFunc() {
    setTimeout(() => {
      if (this.Radar) {
        this.Radar.nativeElement.innerHTML = '';
      }

      radar_visualization({
        svg_id: 'radar',
        ...this.techConfig,
        entries: this.techEnteries,
      });

      this.ref.markForCheck();
    }, 0);
  }
}
