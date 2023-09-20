import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoublonsComponent } from './doublons.component';

describe('DoublonsComponent', () => {
  let component: DoublonsComponent;
  let fixture: ComponentFixture<DoublonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoublonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoublonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
