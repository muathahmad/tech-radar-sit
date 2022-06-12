import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEntry } from '../../../projects/ng-tech-radar/src/lib/helper/interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { importType } from '@angular/compiler/src/output/output_ast';

@Injectable({ providedIn: 'root' })
export class RadarService {
  constructor(private http: HttpClient) {}
  getRadarDate(): Observable<IEntry[]> {
    return this.http.get<IEntry[]>(
      `${environment.baseURL + 'Prod/radar/entry'}`
    );
  }
}
