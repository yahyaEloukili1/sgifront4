import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Doublons2Component } from './doublons2.component';

describe('Doublons2Component', () => {
  let component: Doublons2Component;
  let fixture: ComponentFixture<Doublons2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Doublons2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Doublons2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
