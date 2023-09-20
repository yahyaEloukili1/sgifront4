import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnnexeComponent } from './add-annexe.component';

describe('AddAnnexeComponent', () => {
  let component: AddAnnexeComponent;
  let fixture: ComponentFixture<AddAnnexeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAnnexeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAnnexeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
