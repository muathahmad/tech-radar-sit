import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEntry, RadarSettingInterface } from "../../../projects/ng-tech-radar/src/lib/helper/interface";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class RadarService {
  constructor(private http: HttpClient) {}
  getRadarEntry(): Observable<IEntry[]> {
    return this.http.get<IEntry[]>(
      `${environment.baseURL + 'entry'}`
    );
  }
  getRadarSettings(): Observable<RadarSettingInterface[]>{
    return this.http.get<RadarSettingInterface[]>(
      `${environment.baseURL + 'settings'}`
    )
  }
}
