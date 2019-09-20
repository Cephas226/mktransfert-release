import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPagetestComponent } from './my-pagetest.component';

describe('MyPagetestComponent', () => {
  let component: MyPagetestComponent;
  let fixture: ComponentFixture<MyPagetestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPagetestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPagetestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
