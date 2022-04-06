import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EntiresInterface } from 'projects/ng-tech-radar/src/radar-map-detials';
import { Observable } from 'rxjs';

@Injectable(
  { providedIn: 'root' }
)
export class RadarService {

  constructor(private http: HttpClient) { }

  getRadarDate(): Observable<EntiresInterface[]> {
    let url = 'https://run.mocky.io/v3/94c164ae-4676-456c-b8c1-0ac4a4fa1c4c';
    return this.http.get<EntiresInterface[]>(url);

  };

}

