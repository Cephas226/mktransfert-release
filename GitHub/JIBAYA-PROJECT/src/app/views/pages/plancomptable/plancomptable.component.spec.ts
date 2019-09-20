import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlancomptableComponent } from './plancomptable.component';

describe('PlancomptableComponent', () => {
  let component: PlancomptableComponent;
  let fixture: ComponentFixture<PlancomptableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlancomptableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlancomptableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
