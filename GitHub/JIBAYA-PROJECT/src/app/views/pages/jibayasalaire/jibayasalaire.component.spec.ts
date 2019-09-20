import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JibayasalaireComponent } from './jibayasalaire.component';

describe('JibayasalaireComponent', () => {
  let component: JibayasalaireComponent;
  let fixture: ComponentFixture<JibayasalaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JibayasalaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JibayasalaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
