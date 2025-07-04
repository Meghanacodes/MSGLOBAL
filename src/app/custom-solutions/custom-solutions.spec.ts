import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSolutions } from './custom-solutions';

describe('CustomSolutions', () => {
  let component: CustomSolutions;
  let fixture: ComponentFixture<CustomSolutions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomSolutions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomSolutions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
