import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAnnexeComponent } from './edit-annexe.component';

describe('EditAnnexeComponent', () => {
  let component: EditAnnexeComponent;
  let fixture: ComponentFixture<EditAnnexeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAnnexeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAnnexeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
