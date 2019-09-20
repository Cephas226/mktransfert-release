import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesmodulesComponent } from './mesmodules.component';

describe('MesmodulesComponent', () => {
  let component: MesmodulesComponent;
  let fixture: ComponentFixture<MesmodulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesmodulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesmodulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
