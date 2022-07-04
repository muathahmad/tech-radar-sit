import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { IEntry } from 'projects/ng-tech-radar/src/lib/helper/interface';
import { RadarService } from 'src/app/radar/radar.service';



@Component({
  selector: 'app-view-admin',
  templateUrl: './view-admin.component.html',
  styleUrls: ['./view-admin.component.scss']
})

export class ViewAdminComponent implements OnInit {
  ELEMENT_DATA: Array<IEntry> = []
  displayedColumns: string[] = ['quadrant', 'ring', 'label', 'active','action'];
  dataSource: any;
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(private radarService: RadarService) {
    this.radarService.getRadarEntry().subscribe(data => {
      this.ELEMENT_DATA = data;
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    });

  }

  ngOnInit(): void {
  }

}
