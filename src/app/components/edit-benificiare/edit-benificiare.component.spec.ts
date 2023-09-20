import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBenificiareComponent } from './edit-benificiare.component';

describe('EditBenificiareComponent', () => {
  let component: EditBenificiareComponent;
  let fixture: ComponentFixture<EditBenificiareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBenificiareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBenificiareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
