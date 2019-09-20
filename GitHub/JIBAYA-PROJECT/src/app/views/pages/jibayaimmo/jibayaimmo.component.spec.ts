import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JibayaimmoComponent } from './jibayaimmo.component';

describe('JibayaimmoComponent', () => {
  let component: JibayaimmoComponent;
  let fixture: ComponentFixture<JibayaimmoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JibayaimmoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JibayaimmoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
