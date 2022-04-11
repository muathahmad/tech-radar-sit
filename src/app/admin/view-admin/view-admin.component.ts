import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { EntiresInterface } from 'projects/ng-tech-radar/src/radar-map-detials';
import { RadarService } from 'src/app/radar/radar.service';



@Component({
  selector: 'app-view-admin',
  templateUrl: './view-admin.component.html',
  styleUrls: ['./view-admin.component.scss']
})

export class ViewAdminComponent implements OnInit {
  ELEMENT_DATA: Array<EntiresInterface> = []
  displayedColumns: string[] = ['quadrant', 'ring', 'label', 'active','action'];
  dataSource: any;
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(private radarService: RadarService) {
    this.radarService.getRadarDate().subscribe( data => {
      this.ELEMENT_DATA = data;
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    });

  }

  ngOnInit(): void {
  }

}
