import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauliasseComponent } from './tableauliasse.component';

describe('TableauliasseComponent', () => {
  let component: TableauliasseComponent;
  let fixture: ComponentFixture<TableauliasseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableauliasseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauliasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
