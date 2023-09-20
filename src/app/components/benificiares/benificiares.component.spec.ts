import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenificiaresComponent } from './benificiares.component';

describe('BenificiaresComponent', () => {
  let component: BenificiaresComponent;
  let fixture: ComponentFixture<BenificiaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenificiaresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenificiaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
