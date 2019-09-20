import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JibayaliasseComponent } from './jibayaliasse.component';

describe('JibayaliasseComponent', () => {
  let component: JibayaliasseComponent;
  let fixture: ComponentFixture<JibayaliasseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JibayaliasseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JibayaliasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
