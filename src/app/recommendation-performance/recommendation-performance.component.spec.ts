import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationPerformanceComponent } from './recommendation-performance.component';

describe('RecommendationPerformanceComponent', () => {
  let component: RecommendationPerformanceComponent;
  let fixture: ComponentFixture<RecommendationPerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendationPerformanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendationPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
