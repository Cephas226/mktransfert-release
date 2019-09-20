import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JibayabudgetComponent } from './jibayabudget.component';

describe('JibayabudgetComponent', () => {
  let component: JibayabudgetComponent;
  let fixture: ComponentFixture<JibayabudgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JibayabudgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JibayabudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
