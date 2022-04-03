import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTechRadarComponent } from './ng-tech-radar.component';

describe('NgTechRadarComponent', () => {
  let component: NgTechRadarComponent;
  let fixture: ComponentFixture<NgTechRadarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgTechRadarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTechRadarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
