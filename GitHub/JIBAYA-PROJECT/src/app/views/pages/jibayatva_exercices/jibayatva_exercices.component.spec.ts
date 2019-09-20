import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JibayatvaExercicesComponent } from './jibayatva_exercices.component';

describe('JibayatvaexerciceComponent', () => {
  let component: JibayatvaExercicesComponent;
  let fixture: ComponentFixture<JibayatvaExercicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JibayatvaExercicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JibayatvaExercicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
