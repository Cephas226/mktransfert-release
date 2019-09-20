import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JibayacomptaComponent } from './jibayacompta.component';

describe('JibayacomptaComponent', () => {
  let component: JibayacomptaComponent;
  let fixture: ComponentFixture<JibayacomptaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JibayacomptaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JibayacomptaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
