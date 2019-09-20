import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JibayadocComponent } from './jibayadoc.component';

describe('JibayadocComponent', () => {
  let component: JibayadocComponent;
  let fixture: ComponentFixture<JibayadocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JibayadocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JibayadocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
