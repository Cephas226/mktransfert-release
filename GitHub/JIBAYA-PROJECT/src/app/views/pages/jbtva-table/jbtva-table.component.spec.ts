import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JbtvaTableComponent } from './jbtva-table.component';

describe('JbtvaTableComponent', () => {
  let component: JbtvaTableComponent;
  let fixture: ComponentFixture<JbtvaTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JbtvaTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JbtvaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
