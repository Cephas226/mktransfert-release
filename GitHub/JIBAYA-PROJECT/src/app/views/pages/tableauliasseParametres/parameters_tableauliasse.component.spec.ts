import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ParametreTableauliasseComponent } from './parameters_tableauliasse.component';



describe('TableauliasseComponent', () => {
  let component: ParametreTableauliasseComponent;
  let fixture: ComponentFixture<ParametreTableauliasseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametreTableauliasseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametreTableauliasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
