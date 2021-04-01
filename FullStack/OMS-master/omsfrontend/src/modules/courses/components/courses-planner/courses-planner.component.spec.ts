import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesPlannerComponent } from './courses-planner.component';

describe('CoursesPlannerComponent', () => {
  let component: CoursesPlannerComponent;
  let fixture: ComponentFixture<CoursesPlannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesPlannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
