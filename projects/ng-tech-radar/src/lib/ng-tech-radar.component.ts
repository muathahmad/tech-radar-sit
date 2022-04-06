import { Component, OnInit } from '@angular/core';
import { radar_visualization } from './helper/radar';
import { EntiresInterface, RadarMapDetails, radarMaps } from '../radar-map-detials';
import { RadarService } from 'src/app/radar/radar.service';




@Component({
  selector: 'lib-ng-tech-radar',
  templateUrl: 'ng-tech-radar.component.html',
  styles: [
  ]
})
export class NgTechRadarComponent implements OnInit {

  constructor(private radarService: RadarService) {

    this.radarService.getRadarDate()
  }

  getarrData() {
    return this.radarService.getRadarDate()
  }

  ngOnInit(): void {
    this.radarService.getRadarDate().subscribe((data: EntiresInterface[]) => {
      this.renderFunc(data)
    });
  }


  renderFunc(data: EntiresInterface[]) {

    radar_visualization(
      {
        svg_id: 'radar',
        width: radarMaps.width,
        height: radarMaps.height,
        colors: {
          background: radarMaps.colors.background,
          grid: radarMaps.colors.grid,
          inactive: radarMaps.colors.inactive
        },
        title: radarMaps.title,
        quadrants: [
          { name: radarMaps.quadrants[0].name },
          { name: radarMaps.quadrants[1].name },
          { name: radarMaps.quadrants[2].name },
          { name: radarMaps.quadrants[3].name },
        ],
        rings: [
          { name: radarMaps.rings[0].name, color: radarMaps.rings[0].color },
          { name: radarMaps.rings[1].name, color: radarMaps.rings[1].color },
          { name: radarMaps.rings[2].name, color: radarMaps.rings[2].color },
          { name: radarMaps.rings[3].name, color: radarMaps.rings[3].color }
        ],
        print_layout: radarMaps.print_layout,
        // zoomed_quadrant: 0,
        //ENTRIES
        entries: data


        //ENTRIES
      }
    );
  }
}
