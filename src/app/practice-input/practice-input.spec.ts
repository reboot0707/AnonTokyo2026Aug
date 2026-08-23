import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeInput } from './practice-input';

describe('PracticeInput', () => {
  let component: PracticeInput;
  let fixture: ComponentFixture<PracticeInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticeInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticeInput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
