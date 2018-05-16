import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreregistrationComponent } from './preregistration.component';

describe('PreregistrationComponent', () => {
  let component: PreregistrationComponent;
  let fixture: ComponentFixture<PreregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
