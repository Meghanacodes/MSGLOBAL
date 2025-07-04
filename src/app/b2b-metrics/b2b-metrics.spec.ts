import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B2bMetrics } from './b2b-metrics';

describe('B2bMetrics', () => {
  let component: B2bMetrics;
  let fixture: ComponentFixture<B2bMetrics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [B2bMetrics]
    })
    .compileComponents();

    fixture = TestBed.createComponent(B2bMetrics);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
