import { TestBed } from '@angular/core/testing';

import { NgTechRadarService } from './ng-tech-radar.service';

describe('NgTechRadarService', () => {
  let service: NgTechRadarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgTechRadarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
