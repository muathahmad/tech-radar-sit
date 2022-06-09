import { Component, OnInit } from '@angular/core';
import { RadarMapDetails, IEntry } from 'ng-tech-radar';
import { RadarService } from '../radar.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  radarConfig: RadarMapDetails = {
    title: "Sitech Radar",
    width: 1500,
    height: 1000,
    quadrants: [
        { name: "Languages" },
        { name: "Infrastructure" },
        { name: "Datastores" },
        { name: "Data Management" },
    ],
    colors: {
        background: "#fff",
        grid: "#bbb",
        inactive: "#ddd"
    },
    rings: [
        { name: "ADOPT", color: "#93c47d" },
        { name: "TRIAL", color: "#93d2c2" },
        { name: "ASSESS", color: "#fbdb84" },
        { name: "HOLD", color: "#efafa9" }
    ],
    print_layout: true

  }
  radarEntries: IEntry[] = [];

  constructor(private radarService: RadarService) {

   }

  ngOnInit() {
    this.radarService.getRadarDate().subscribe(({data } : any ) => {
      this.radarEntries = data;
    });
  }

}
