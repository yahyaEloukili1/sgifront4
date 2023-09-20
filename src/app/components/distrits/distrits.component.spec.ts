import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistritsComponent } from './distrits.component';

describe('DistritsComponent', () => {
  let component: DistritsComponent;
  let fixture: ComponentFixture<DistritsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistritsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistritsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
