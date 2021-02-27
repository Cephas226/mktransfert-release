import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelAdministrationComponent } from './panel-administration.component';

describe('PanelAdministrationComponent', () => {
  let component: PanelAdministrationComponent;
  let fixture: ComponentFixture<PanelAdministrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelAdministrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
