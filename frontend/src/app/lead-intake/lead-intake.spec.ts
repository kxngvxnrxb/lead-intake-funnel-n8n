import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadIntake } from './lead-intake';

describe('LeadIntake', () => {
  let component: LeadIntake;
  let fixture: ComponentFixture<LeadIntake>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeadIntake]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadIntake);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
