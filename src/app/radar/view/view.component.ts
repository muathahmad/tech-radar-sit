import { Component, OnInit } from '@angular/core';
import { RadarService } from '../radar.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  constructor(private radarService: RadarService) { }

  ngOnInit() {
    console.log(this.radarService.getRadarDate())
  }

}
