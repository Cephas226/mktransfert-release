import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JbJibayatvaComponent } from './jb-jibayatva.component';

describe('JbJibayatvaComponent', () => {
  let component: JbJibayatvaComponent;
  let fixture: ComponentFixture<JbJibayatvaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JbJibayatvaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JbJibayatvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
