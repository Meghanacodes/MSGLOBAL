import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighTrafficLocations } from './high-traffic-locations';

describe('HighTrafficLocations', () => {
  let component: HighTrafficLocations;
  let fixture: ComponentFixture<HighTrafficLocations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighTrafficLocations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighTrafficLocations);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
