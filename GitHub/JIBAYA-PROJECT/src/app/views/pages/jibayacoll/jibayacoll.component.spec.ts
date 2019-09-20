import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JibayacollComponent } from './jibayacoll.component';

describe('JibayacollComponent', () => {
  let component: JibayacollComponent;
  let fixture: ComponentFixture<JibayacollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JibayacollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JibayacollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
