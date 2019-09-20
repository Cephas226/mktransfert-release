import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandsontbleComponent } from './handsontble.component';

describe('HandsontbleComponent', () => {
  let component: HandsontbleComponent;
  let fixture: ComponentFixture<HandsontbleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandsontbleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandsontbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
