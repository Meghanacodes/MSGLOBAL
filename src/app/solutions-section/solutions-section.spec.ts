import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsSection } from './solutions-section';

describe('SolutionsSection', () => {
  let component: SolutionsSection;
  let fixture: ComponentFixture<SolutionsSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolutionsSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolutionsSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
