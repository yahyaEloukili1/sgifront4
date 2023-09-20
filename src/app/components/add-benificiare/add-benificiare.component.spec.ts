import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBenificiareComponent } from './add-benificiare.component';

describe('AddBenificiareComponent', () => {
  let component: AddBenificiareComponent;
  let fixture: ComponentFixture<AddBenificiareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBenificiareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBenificiareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
