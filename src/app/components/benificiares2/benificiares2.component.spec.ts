import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Benificiares2Component } from './benificiares2.component';

describe('Benificiares2Component', () => {
  let component: Benificiares2Component;
  let fixture: ComponentFixture<Benificiares2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Benificiares2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Benificiares2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
