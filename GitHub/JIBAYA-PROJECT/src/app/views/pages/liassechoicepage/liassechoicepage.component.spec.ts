import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiassechoicepageComponent } from './liassechoicepage.component';

describe('LiassechoicepageComponent', () => {
  let component: LiassechoicepageComponent;
  let fixture: ComponentFixture<LiassechoicepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiassechoicepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiassechoicepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
